'use client';

import { useEffect, useMemo, useState } from 'react';
import { creatures, rarityLabel, type Creature } from '@/lib/creatures';
import { getSupabase } from '@/lib/supabase';
import type { User } from '@supabase/supabase-js';

type Phase = 'egg' | 'baby' | 'child' | 'adult';
type HistoryItem = { creatureId:string; bornAt:string; generation:number; trait:string };
type GameState = { phase:Phase; taps:number; hatchAt:number; growth:number; generation:number; currentId:string|null; discovered:string[]; history:HistoryItem[]; pity:number; trait:string };

const STORAGE='touch-egg-save-v2';
const traits=['おっとり','せっかち','食いしん坊','夜ふかし','人見知り','好奇心旺盛','よく寝る','気まぐれ'];
const reactions=['……。','少し揺れた？','気のせいかもしれない。','中から音がした。','ほんのり温かい。','いま、こっちを見た？'];
function randomHatch(){return 35+Math.floor(Math.random()*36)}
const initial:GameState={phase:'egg',taps:0,hatchAt:50,growth:0,generation:1,currentId:null,discovered:[],history:[],pity:0,trait:''};

function migrateGame(state:GameState):GameState{
  if(state.phase==='egg'&&state.hatchAt>70)return {...state,hatchAt:Math.max(35,Math.ceil(state.hatchAt/2))};
  return state;
}

function pickCreature(state:GameState){
  const unseen=creatures.filter(c=>!state.discovered.includes(c.id));
  const pool=creatures.map(c=>({c,w:c.weight*(unseen.some(u=>u.id===c.id)?1.65:1)*(state.pity>=3&&c.rarity!=='COMMON'?1.6:1)}));
  const total=pool.reduce((a,b)=>a+b.w,0); let r=Math.random()*total;
  for(const x of pool){r-=x.w;if(r<=0)return x.c;} return pool[0].c;
}

export default function Home(){
  const [game,setGame]=useState<GameState>(initial);
  const [tab,setTab]=useState<'home'|'dex'>('home');
  const [message,setMessage]=useState('たまごをさわってみる。');
  const [user,setUser]=useState<User|null>(null);
  const [accountOpen,setAccountOpen]=useState(false);
  const [ready,setReady]=useState(false);
  const current=useMemo(()=>creatures.find(c=>c.id===game.currentId)||null,[game.currentId]);

  useEffect(()=>{
    const raw=localStorage.getItem(STORAGE);
    if(raw){try{setGame(migrateGame(JSON.parse(raw)))}catch{}}
    else setGame(v=>({...v,hatchAt:randomHatch()}));
    const s=getSupabase();
    if(!s){setReady(true);return;}
    s.auth.getUser().then(async({data})=>{
      setUser(data.user||null);
      if(data.user){
        const {data:row}=await s.from('game_saves').select('state').eq('user_id',data.user.id).maybeSingle();
        if(row?.state)setGame(migrateGame(row.state as GameState));
      }
      setReady(true);
    });
    const {data:sub}=s.auth.onAuthStateChange((_e,session)=>setUser(session?.user||null));
    return()=>sub.subscription.unsubscribe();
  },[]);

  useEffect(()=>{
    if(!ready)return;
    localStorage.setItem(STORAGE,JSON.stringify(game));
    const s=getSupabase();
    if(user&&s){
      const timer=setTimeout(()=>{s.from('game_saves').upsert({user_id:user.id,state:game,updated_at:new Date().toISOString()}).then(()=>{})},350);
      return()=>clearTimeout(timer);
    }
  },[game,user,ready]);

  async function login(){
    const s=getSupabase();
    if(!s){setMessage('VercelにSupabase環境変数を設定するとGoogleログインが使えます。');return;}
    await s.auth.signInWithOAuth({provider:'google',options:{redirectTo:window.location.origin}});
  }
  async function logout(){const s=getSupabase();if(s)await s.auth.signOut();setUser(null);setAccountOpen(false)}

  function tap(){
    setGame(prev=>{
      if(prev.phase==='egg'){
        const taps=prev.taps+1;
        if(taps>=prev.hatchAt){
          const born=pickCreature(prev);
          const trait=traits[Math.floor(Math.random()*traits.length)];
          const discovered=prev.discovered.includes(born.id)?prev.discovered:[...prev.discovered,born.id];
          setMessage(`${born.name}が生まれた！ ${born.trivia}`);
          return {...prev,phase:'baby',taps,growth:0,currentId:born.id,trait,discovered,history:[...prev.history,{creatureId:born.id,bornAt:new Date().toISOString(),generation:prev.generation,trait}],pity:born.rarity==='COMMON'?prev.pity+1:0};
        }
        if(taps%10===0||Math.random()<.1)setMessage(reactions[Math.floor(Math.random()*reactions.length)]);
        return {...prev,taps};
      }
      const growth=prev.growth+1;
      if(prev.phase==='baby'&&growth>=35){setMessage('少し大きくなった。');return {...prev,phase:'child',growth:0}}
      if(prev.phase==='child'&&growth>=55){setMessage('立派に育った。そろそろ何か起きそう。');return {...prev,phase:'adult',growth:0}}
      if(prev.phase==='adult'&&growth>=45){setMessage('……卵を産んだ！');return {...prev,phase:'egg',growth:0,taps:0,hatchAt:randomHatch(),generation:prev.generation+1,currentId:null,trait:''}}
      if(Math.random()<.12)setMessage(['うれしそう。','眠そう。','ちょっと嫌そう。','近づいてきた。','何も起きなかった。'][Math.floor(Math.random()*5)]);
      return {...prev,growth};
    });
  }

  const displayName=user?.user_metadata?.full_name||user?.user_metadata?.name||user?.email?.split('@')[0]||'ユーザー';
  const avatarUrl=user?.user_metadata?.avatar_url||user?.user_metadata?.picture||'';
  const crack=game.phase==='egg'?Math.min(4,Math.floor((game.taps/Math.max(1,game.hatchAt))*5)):0;
  const progress=game.phase==='egg'?Math.min(100,Math.round(game.taps/game.hatchAt*100)):0;
  const remaining=game.phase==='egg'?Math.max(0,game.hatchAt-game.taps):0;
  return <main>
    <header><div><h1>Touch Egg</h1><p>触るだけ。いつか生まれる。</p></div>
      {user?<div className="accountWrap">
        <button className="accountButton" onClick={()=>setAccountOpen(v=>!v)} aria-expanded={accountOpen}>
          {avatarUrl?<img src={avatarUrl} alt=""/>:<span className="avatarFallback">{displayName.slice(0,1)}</span>}
          <span className="accountName">{displayName}</span><span className="chev">⌄</span>
        </button>
        {accountOpen&&<div className="accountMenu">
          <div className="accountIdentity">{avatarUrl?<img src={avatarUrl} alt=""/>:<span className="avatarFallback large">{displayName.slice(0,1)}</span>}<div><strong>{displayName}</strong><small>{user.email}</small></div></div>
          <button onClick={logout}>ログアウト</button>
        </div>}
      </div>:<button className="login" onClick={login}>Googleでログイン</button>}
    </header>
    <nav><button className={tab==='home'?'active':''} onClick={()=>setTab('home')}>たまご</button><button className={tab==='dex'?'active':''} onClick={()=>setTab('dex')}>図鑑 <span>{game.discovered.length}/{creatures.length}</span></button></nav>
    {tab==='home'?<section className="play">
      <div className="status">GEN {game.generation} ・ {game.phase==='egg'?'？？？':game.phase.toUpperCase()}</div>
      <button className="touchTarget" onClick={tap} aria-label="さわる">
        {game.phase==='egg'?<EggArt stage={crack}/>:current&&<CreatureFace creature={current} phase={game.phase}/>} 
      </button>
      <div className="message">{message}</div>
      {game.phase==='egg'&&<div className="eggProgress"><div className="progressTrack"><i style={{width:`${progress}%`}}/></div><strong>{game.taps} / {game.hatchAt} 回</strong><small>{remaining>0?`あと ${remaining} 回くらいで何か起きそう`:'もうすぐ…！'}</small></div>}
      {current&&<div className="card"><div className="cardTop"><strong>{current.name}</strong><span className={`rarity ${current.rarity.toLowerCase()}`}>{rarityLabel[current.rarity]}</span></div><p>{current.trivia}</p><small>{current.region} ・ {current.category} ・ {game.trait}</small></div>}
      <p className="hint">{game.phase==='egg'?`タッチ ${game.taps}回`:`成長 ${game.growth} ・ さわって育てる`}</p>
    </section>:<Dex discovered={game.discovered}/>} 
    <footer>{user?`${displayName}としてクラウド保存中`:'ログインすると図鑑と世代をクラウド保存できます'}</footer>
  </main>;
}

function EggArt({stage}:{stage:number}){return <svg className={`eggArt stage${stage}`} viewBox="0 0 240 300" aria-hidden="true"><use href={`/eggs/stages.svg#egg${stage}`}/></svg>}
function CreatureArt({creature,className=''}:{creature:Creature;className?:string}){return <svg className={`creatureArt ${className}`} viewBox="0 0 200 200" aria-hidden="true"><use href={`/creatures/sprite.svg#${creature.id}`}/></svg>}
function CreatureFace({creature,phase}:{creature:Creature;phase:Phase}){return <div className={`creature ${phase}`}><CreatureArt creature={creature}/><span>{creature.name}</span></div>}
function Dex({discovered}:{discovered:string[]}){return <section className="dex"><div className="dexIntro"><h2>CREATURE BOOK</h2><p>世界の神話・伝説・古生物。出会ったものだけ記録される。</p></div><div className="grid">{creatures.map((c,i)=>{const seen=discovered.includes(c.id);return <article className={seen?'seen':'locked'} key={c.id}><div className="no">No.{String(i+1).padStart(3,'0')}</div><div className="dexArt">{seen?<CreatureArt creature={c}/>:<span>?</span>}</div><h3>{seen?c.name:'？？？？'}</h3>{seen?<><div className={`rarity ${c.rarity.toLowerCase()}`}>{c.rarity}</div><p>{c.trivia}</p><small>{c.region} ・ {c.category}</small><a href={c.sourceUrl} target="_blank" rel="noreferrer">根拠：{c.sourceLabel} ↗</a></>:<p>まだ出会っていない。</p>}</article>})}</div></section>}
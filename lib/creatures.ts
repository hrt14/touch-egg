export type Rarity = 'COMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
export type Creature = {
  id: string;
  name: string;
  reading: string;
  emoji: string;
  rarity: Rarity;
  category: '神話' | '伝説' | '妖怪' | '古生物';
  region: string;
  trivia: string;
  sourceLabel: string;
  sourceUrl: string;
  weight: number;
};

export const creatures: Creature[] = [
  {id:'phoenix',name:'フェニックス',reading:'Phoenix',emoji:'🔥',rarity:'EPIC',category:'神話',region:'古代ギリシャ・ローマ',trivia:'灰から再生すると語られる霊鳥',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/phoenix-mythological-bird',weight:7},
  {id:'griffin',name:'グリフィン',reading:'Griffin',emoji:'🦅',rarity:'RARE',category:'伝説',region:'地中海・西アジア',trivia:'鷲の頭と翼、獅子の体を持つ',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/griffin-mythological-creature',weight:13},
  {id:'unicorn',name:'ユニコーン',reading:'Unicorn',emoji:'🦄',rarity:'RARE',category:'伝説',region:'ヨーロッパ',trivia:'額に一本角を持つとされた幻獣',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/unicorn',weight:13},
  {id:'cerberus',name:'ケルベロス',reading:'Cerberus',emoji:'🐕',rarity:'EPIC',category:'神話',region:'古代ギリシャ',trivia:'冥府の門を守る多頭の番犬',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/Cerberus',weight:7},
  {id:'kappa',name:'河童',reading:'Kappa',emoji:'🥒',rarity:'COMMON',category:'妖怪',region:'日本',trivia:'水辺に棲むと伝わる日本の妖怪',sourceLabel:'Yokai.com',sourceUrl:'https://yokai.com/kappa/',weight:22},
  {id:'qilin',name:'麒麟',reading:'Qilin',emoji:'✨',rarity:'LEGENDARY',category:'神話',region:'中国',trivia:'聖人の世に現れる瑞獣とされた',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/qilin',weight:3},
  {id:'dragon',name:'ドラゴン',reading:'Dragon',emoji:'🐉',rarity:'LEGENDARY',category:'伝説',region:'ヨーロッパ',trivia:'翼と炎を持つ姿で語られる竜',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/dragon-mythological-creature',weight:3},
  {id:'pegasus',name:'ペガサス',reading:'Pegasus',emoji:'🪽',rarity:'EPIC',category:'神話',region:'古代ギリシャ',trivia:'英雄を乗せて空を翔けた天馬',sourceLabel:'Encyclopaedia Britannica',sourceUrl:'https://www.britannica.com/topic/Pegasus-Greek-mythology',weight:7},
  {id:'kitsune',name:'きつね妖怪',reading:'Kitsune',emoji:'🦊',rarity:'RARE',category:'妖怪',region:'日本',trivia:'長く生きるほど尾が増すとされる狐',sourceLabel:'Yokai.com',sourceUrl:'https://yokai.com/kitsune/',weight:13},
  {id:'baku',name:'獏',reading:'Baku',emoji:'🌙',rarity:'COMMON',category:'妖怪',region:'日本・中国',trivia:'悪い夢を食べると信じられた霊獣',sourceLabel:'Yokai.com',sourceUrl:'https://yokai.com/baku/',weight:22},
  {id:'ammonite',name:'アンモナイト',reading:'Ammonite',emoji:'🐚',rarity:'COMMON',category:'古生物',region:'世界の海',trivia:'殻の部屋で浮力を調節した頭足類',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/what-is-an-ammonite.html',weight:22},
  {id:'trilobite',name:'三葉虫',reading:'Trilobite',emoji:'🪲',rarity:'COMMON',category:'古生物',region:'古生代の海',trivia:'古生代の海で栄えた節足動物',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/how-trilobites-conquered-prehistoric-oceans.html',weight:22},
  {id:'archaeopteryx',name:'始祖鳥',reading:'Archaeopteryx',emoji:'🪶',rarity:'RARE',category:'古生物',region:'ジュラ紀の欧州',trivia:'羽毛を残す小型の鳥類型恐竜',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/dino-directory/archaeopteryx',weight:13},
  {id:'dunkleosteus',name:'ダンクルオステウス',reading:'Dunkleosteus',emoji:'🐟',rarity:'EPIC',category:'古生物',region:'デボン紀の海',trivia:'硬い頭甲を備えた巨大な板皮類',sourceLabel:'Cleveland Museum of Natural History',sourceUrl:'https://www.cmnh.org/dunkleosteus',weight:7},
  {id:'mammoth',name:'マンモス',reading:'Mammoth',emoji:'🦣',rarity:'COMMON',category:'古生物',region:'氷河時代の北半球',trivia:'長い毛と湾曲した牙を持つ巨獣',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/were-all-mammoths-woolly.html',weight:22},
  {id:'smilodon',name:'スミロドン',reading:'Smilodon',emoji:'🐯',rarity:'RARE',category:'古生物',region:'南北アメリカ',trivia:'長い犬歯を備えた剣歯ネコの仲間',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/news/2025/december/sabre-toothed-tiger-sense-smell-reconstructed-skull-scans.html',weight:13},
  {id:'parasaurolophus',name:'パラサウロロフス',reading:'Parasaurolophus',emoji:'🦕',rarity:'COMMON',category:'古生物',region:'白亜紀の北米',trivia:'頭の長いトサカに空洞を持つ恐竜',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/dino-directory/parasaurolophus.html',weight:22},
  {id:'mosasaurus',name:'モササウルス',reading:'Mosasaurus',emoji:'🌊',rarity:'EPIC',category:'古生物',region:'白亜紀の海',trivia:'恐竜時代の海を支配した大型爬虫類',sourceLabel:'Natural History Museum',sourceUrl:'https://www.nhm.ac.uk/discover/what-is-a-mosasaur.html',weight:7}
];

export const rarityLabel: Record<Rarity,string> = {COMMON:'COMMON',RARE:'RARE',EPIC:'EPIC',LEGENDARY:'LEGENDARY'};

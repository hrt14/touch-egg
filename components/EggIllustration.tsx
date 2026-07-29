'use client';

const cracks=[
'',
'<path d="M126 108l-13 28 12 10-15 27" fill="none" stroke="#654a25" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
'<path d="M125 85l-15 32 14 12-18 30 14 14-17 32M123 129l29 14-13 22" fill="none" stroke="#654a25" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
'<path d="M123 65l-16 35 15 13-20 28 16 15-19 29 15 18-13 29M120 112l34 17-17 23 26 15M108 143l-27 12 16 21-24 16" fill="none" stroke="#5c421e" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>',
'<path d="M120 48l-17 38 16 13-21 31 17 17-21 31 18 20-14 34M116 98l40 18-20 27 31 18-18 24M102 130l-31 15 19 25-30 21M126 147l30 4-10 27 25 12" fill="none" stroke="#513817" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
];

export default function EggIllustration({stage}:{stage:number}){
  const crack=cracks[Math.max(0,Math.min(4,stage))];
  const svg=`<svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="shell" cx="34%" cy="24%"><stop offset="0" stop-color="#fffaf0"/><stop offset=".38" stop-color="#f2d99f"/><stop offset=".72" stop-color="#dfb963"/><stop offset="1" stop-color="#bd8d39"/></radialGradient><filter id="shadow"><feDropShadow dx="0" dy="14" stdDeviation="10" flood-color="#6f5529" flood-opacity=".32"/></filter></defs><ellipse cx="120" cy="272" rx="78" ry="15" fill="#7e63392b"/><path d="M120 18C64 18 35 116 44 191c7 65 35 93 76 93s69-28 76-93C205 116 176 18 120 18Z" fill="url(#shell)" stroke="#a97a2e" stroke-width="3" filter="url(#shadow)"/><g fill="#8e672f2e"><circle cx="91" cy="83" r="5"/><circle cx="142" cy="71" r="4"/><circle cx="75" cy="135" r="4"/><circle cx="151" cy="126" r="6"/><circle cx="104" cy="172" r="5"/><circle cx="164" cy="184" r="4"/><circle cx="83" cy="217" r="5"/></g>${crack}</svg>`;
  return <div className={`eggIllustration stage${stage}`} dangerouslySetInnerHTML={{__html:svg}}/>;
}

'use client';

const cracks=[
  '',
  '<path d="M126 112l-12 24 11 10-14 25" fill="none" stroke="#7b593b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M126 88l-15 30 13 12-17 28 14 14-15 29M122 130l27 13-12 21" fill="none" stroke="#765136" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M123 68l-15 33 14 13-19 27 16 15-18 27 14 18-12 27M120 112l33 17-16 22 25 15M108 143l-26 12 15 20-23 16" fill="none" stroke="#6d4930" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>',
  '<path d="M120 50l-17 37 16 13-21 30 17 17-20 30 18 20-14 33M116 98l39 18-19 26 30 18-18 24M102 130l-30 15 18 24-29 21M126 147l29 4-10 26 24 12" fill="none" stroke="#62402b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
];

export default function EggIllustration({stage}:{stage:number}){
  const safe=Math.max(0,Math.min(4,stage));
  const crack=cracks[safe];
  const svg=`<svg class="eggArt stage${safe}" style="position:absolute;inset:0;width:100%;height:100%" viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="shell" cx="34%" cy="22%"><stop offset="0" stop-color="#fffdf7"/><stop offset=".46" stop-color="#f8ead2"/><stop offset=".78" stop-color="#efd2a8"/><stop offset="1" stop-color="#dcae78"/></radialGradient><radialGradient id="blush"><stop stop-color="#f5b2a0" stop-opacity=".6"/><stop offset="1" stop-color="#f5b2a0" stop-opacity="0"/></radialGradient><filter id="shadow"><feDropShadow dx="0" dy="13" stdDeviation="10" flood-color="#79654c" flood-opacity=".22"/></filter></defs><ellipse cx="120" cy="273" rx="73" ry="13" fill="#79654c20"/><path d="M120 20C69 20 39 105 43 183c3 67 32 101 77 101s74-34 77-101C201 105 171 20 120 20Z" fill="url(#shell)" stroke="#d7b080" stroke-width="2" filter="url(#shadow)"/><path d="M76 70c18-30 53-39 78-23" fill="none" stroke="#fff" stroke-opacity=".62" stroke-width="8" stroke-linecap="round"/><g opacity=".72"><g fill="#efb2a0"><circle cx="82" cy="111" r="8"/><circle cx="151" cy="78" r="7"/><circle cx="145" cy="181" r="9"/></g><g fill="#e8c76e"><circle cx="113" cy="73" r="7"/><circle cx="76" cy="174" r="8"/><circle cx="165" cy="137" r="7"/></g><g fill="#9eb58b"><circle cx="139" cy="119" r="8"/><circle cx="102" cy="205" r="7"/></g><g fill="#fff5e8"><circle cx="82" cy="111" r="3"/><circle cx="151" cy="78" r="3"/><circle cx="145" cy="181" r="3"/><circle cx="113" cy="73" r="3"/><circle cx="76" cy="174" r="3"/><circle cx="165" cy="137" r="3"/><circle cx="139" cy="119" r="3"/><circle cx="102" cy="205" r="3"/></g></g><ellipse cx="82" cy="146" rx="28" ry="20" fill="url(#blush)" opacity=".28"/><ellipse cx="158" cy="146" rx="28" ry="20" fill="url(#blush)" opacity=".28"/>${crack}</svg>`;
  return <div className="eggIllustration" dangerouslySetInnerHTML={{__html:svg}}/>;
}

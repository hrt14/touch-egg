'use client';

const cracks = [
  '',
  '<path d="M126 112l-12 24 11 10-14 25"/>',
  '<path d="M126 88l-15 30 13 12-17 28 14 14-15 29M122 130l27 13-12 21"/>',
  '<path d="M123 68l-15 33 14 13-19 27 16 15-18 27 14 18-12 27M120 112l33 17-16 22 25 15M108 143l-26 12 15 20-23 16"/>',
  '<path d="M120 50l-17 37 16 13-21 30 17 17-20 30 18 20-14 33M116 98l39 18-19 26 30 18-18 24M102 130l-30 15 18 24-29 21M126 147l29 4-10 26 24 12"/>',
];

export default function EggIllustration({ stage }: { stage: number }) {
  const safe = Math.max(0, Math.min(4, stage));

  return (
    <div className={`eggIllustration stage${safe}`}>
      <img className="eggArt" src="/art/egg.png" alt="" draggable={false} />
      {safe > 0 && (
        <svg
          className="eggCracks"
          viewBox="0 0 240 300"
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: cracks[safe] }}
        />
      )}
    </div>
  );
}

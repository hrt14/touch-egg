'use client';

const cracks = [
  '',
  'M342 236l-28 52 24 22-34 58',
  'M342 205l-34 66 27 25-38 61 31 28-32 63 M334 296l68 30-35 45',
  'M340 174l-38 76 31 29-43 62 36 33-40 62 35 35-27 55 M328 278l82 37-39 54 58 31 M296 342l-63 31 39 45-54 41',
  'M338 143l-44 87 38 31-50 70 42 40-47 72 42 46-34 69 M326 260l93 43-45 61 71 42-43 56 M281 329l-76 39 45 55-68 49 M341 370l72 10-27 57 62 28',
];

export default function EggIllustration({ stage }: { stage: number }) {
  const safe = Math.max(0, Math.min(4, stage));

  return (
    <div className={`eggIllustration stage${safe}`} data-stage={safe}>
      <img
        className="eggArt"
        src="/art/egg.png"
        alt="花模様のたまご"
        width={640}
        height={640}
        draggable={false}
      />
      {safe > 0 && (
        <svg
          className="eggCracks"
          viewBox="0 0 640 640"
          aria-hidden="true"
        >
          <path d={cracks[safe]} />
        </svg>
      )}
    </div>
  );
}

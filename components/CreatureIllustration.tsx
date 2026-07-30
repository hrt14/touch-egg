'use client';

export type GrowthPhase = 'baby' | 'child' | 'adult';

export default function CreatureIllustration({
  id,
  phase = 'adult',
  className = '',
  eager = false,
}: {
  id: string;
  phase?: GrowthPhase;
  className?: string;
  eager?: boolean;
}) {
  return (
    <div className={`creatureIllustration growth-${phase} ${className}`}>
      <img
        src={`/art/creatures/${id}-${phase}.webp`}
        alt=""
        draggable={false}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  );
}

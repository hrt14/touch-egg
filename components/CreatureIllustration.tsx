'use client';

export type GrowthPhase = 'baby' | 'child' | 'adult';

type Props = {
  id: string;
  phase?: GrowthPhase;
  className?: string;
  eager?: boolean;
};

export default function CreatureIllustration({
  id,
  phase = 'adult',
  className = '',
  eager = false,
}: Props) {
  return (
    <div
      className={`creatureIllustration growth-${phase} ${className}`}
      data-creature={id}
      data-growth={phase}
    >
      <img
        src={`/art/creatures/${id}.webp`}
        alt=""
        width={640}
        height={640}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
      />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { creatures } from '@/lib/creatures';

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
  const [broken, setBroken] = useState(false);
  const creature = creatures.find(c => c.id === id);

  return (
    <div
      className={`creatureIllustration growth-${phase} ${className}`}
      data-creature={id}
      data-growth={phase}
    >
      {!broken ? (
        <img
          src={`/art/creatures/${id}.webp`}
          alt={creature?.name || ''}
          width={640}
          height={640}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          draggable={false}
          onError={() => setBroken(true)}
        />
      ) : (
        <div className="creatureFallback" role="img" aria-label={creature?.name || id}>
          <span>{creature?.emoji || '✨'}</span>
        </div>
      )}
    </div>
  );
}

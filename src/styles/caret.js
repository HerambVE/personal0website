'use client';
import { useEffect, useState } from 'react';

export default function CaretDown({
  appearDelay = 4350,
  wiggleDuration = 1000,
  idleOpacity = 0.85,
  className = '',
}) {
  const [visible, setVisible] = useState(false);
  const [wiggling, setWiggling] = useState(false);

  useEffect(() => {
    const appearTimer = setTimeout(() => {
      setVisible(true);
      setWiggling(true);
    }, appearDelay);

    const stopWiggleTimer = setTimeout(() => {
      setWiggling(false);
    }, appearDelay + wiggleDuration);

    return () => {
      clearTimeout(appearTimer);
      clearTimeout(stopWiggleTimer);
    };
  }, [appearDelay, wiggleDuration]);

  return (
    <div
      className={`
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
        ${className}
      `}
      style={{ opacity: visible ? idleOpacity : 0 }}
    >
      {/* Wiggle wrapper */}
      <div className={wiggling ? 'animate-wiggleY' : ''}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="
            w-14 h-14
            text-emerald-50
            rounded-full
            p-2
          "
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </div>
    </div>
  );
}

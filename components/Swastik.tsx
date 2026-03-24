"use client";

export default function Swastik({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gold3d" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF0B3" />
          <stop offset="20%" stopColor="#E8B830" />
          <stop offset="45%" stopColor="#D4A017" />
          <stop offset="60%" stopColor="#B8860B" />
          <stop offset="80%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#FDD856" />
        </linearGradient>
        <filter id="swGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0.5 0 0 0  0.5 0.3 0 0 0  0 0 0 0 0  0 0 0 0.5 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="dotGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="70%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </radialGradient>
      </defs>

      <g filter="url(#swGlow)">
        {/* Swastik shape - rounded arms with curved hooks */}
        <path
          d="
            M 88,100 L 88,45 C 88,40 90,38 95,38 L 148,38 C 153,38 155,40 155,45 C 155,50 153,52 148,52 L 112,52 L 112,100
            M 100,88 L 155,88 C 160,88 162,90 162,95 L 162,148 C 162,153 160,155 155,155 C 150,155 148,153 148,148 L 148,112 L 100,112
            M 112,100 L 112,155 C 112,160 110,162 105,162 L 52,162 C 47,162 45,160 45,155 C 45,150 47,148 52,148 L 88,148 L 88,100
            M 100,112 L 45,112 C 40,112 38,110 38,105 L 38,52 C 38,47 40,45 45,45 C 50,45 52,47 52,52 L 52,88 L 100,88
          "
          fill="url(#gold3d)"
          stroke="#B8860B"
          strokeWidth="0.5"
        />

        {/* Highlight edges */}
        <path
          d="
            M 88,100 L 88,45 C 88,40 90,38 95,38 L 148,38 C 153,38 155,40 155,45 C 155,50 153,52 148,52 L 112,52 L 112,100
            M 100,88 L 155,88 C 160,88 162,90 162,95 L 162,148 C 162,153 160,155 155,155 C 150,155 148,153 148,148 L 148,112 L 100,112
            M 112,100 L 112,155 C 112,160 110,162 105,162 L 52,162 C 47,162 45,160 45,155 C 45,150 47,148 52,148 L 88,148 L 88,100
            M 100,112 L 45,112 C 40,112 38,110 38,105 L 38,52 C 38,47 40,45 45,45 C 50,45 52,47 52,52 L 52,88 L 100,88
          "
          fill="none"
          stroke="#FFF5CC"
          strokeWidth="1"
          opacity="0.3"
        />

        {/* 4 dots between the arms */}
        <circle cx="68" cy="68" r="8" fill="url(#dotGrad)" />
        <circle cx="132" cy="68" r="8" fill="url(#dotGrad)" />
        <circle cx="132" cy="132" r="8" fill="url(#dotGrad)" />
        <circle cx="68" cy="132" r="8" fill="url(#dotGrad)" />

        {/* Dot highlights */}
        <circle cx="66" cy="66" r="3" fill="#FFF5CC" opacity="0.4" />
        <circle cx="130" cy="66" r="3" fill="#FFF5CC" opacity="0.4" />
        <circle cx="130" cy="130" r="3" fill="#FFF5CC" opacity="0.4" />
        <circle cx="66" cy="130" r="3" fill="#FFF5CC" opacity="0.4" />
      </g>
    </svg>
  );
}

interface BikeSketchProps {
  color?: string;
  accent?: string;
  className?: string;
  title?: string;
  src?: string;
}

/**
 * Shows a real photo when `src` is provided, otherwise falls back to a
 * stylized, hand-drawn side-profile sportbike (recolored per bike).
 */
export default function BikeSketch({
  color = "#2C6FB5",
  accent = "#F4EFE3",
  className,
  title = "Sportbike sketch",
  src,
}: BikeSketchProps) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={title} className={`${className ?? ""} object-cover`} />;
  }
  return (
    <svg
      viewBox="0 0 400 230"
      className={className}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`tank-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.95" />
          <stop offset="1" stopColor={color} stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* ground shadow */}
      <ellipse cx="200" cy="206" rx="150" ry="10" fill="#0b1b2e" opacity="0.12" />

      <g
        fill="none"
        stroke="#10243a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* rear wheel */}
        <circle cx="108" cy="160" r="44" fill="#1b1f24" />
        <circle cx="108" cy="160" r="44" stroke="#10243a" />
        <circle cx="108" cy="160" r="20" fill={accent} stroke="#10243a" strokeWidth="3" />
        <g stroke="#10243a" strokeWidth="2.5">
          <line x1="108" y1="140" x2="108" y2="180" />
          <line x1="88" y1="160" x2="128" y2="160" />
          <line x1="94" y1="146" x2="122" y2="174" />
          <line x1="122" y1="146" x2="94" y2="174" />
        </g>

        {/* front wheel */}
        <circle cx="306" cy="160" r="44" fill="#1b1f24" />
        <circle cx="306" cy="160" r="44" stroke="#10243a" />
        <circle cx="306" cy="160" r="20" fill={accent} stroke="#10243a" strokeWidth="3" />
        <g stroke="#10243a" strokeWidth="2.5">
          <line x1="306" y1="140" x2="306" y2="180" />
          <line x1="286" y1="160" x2="326" y2="160" />
          <line x1="292" y1="146" x2="320" y2="174" />
          <line x1="320" y1="146" x2="292" y2="174" />
        </g>

        {/* swingarm + forks */}
        <path d="M108 160 L196 150" strokeWidth="6" />
        <path d="M306 160 L286 96" strokeWidth="6" />

        {/* main body: tail hump -> seat -> tank -> tank/nose */}
        <path
          d="M86 132
             Q120 118 150 124
             L186 120
             Q210 100 250 102
             L286 96
             Q300 92 312 104
             L296 122
             Q262 128 232 130
             L210 150
             Q170 156 150 150
             Q120 150 100 146 Z"
          fill={`url(#tank-${color})`}
          stroke="#10243a"
          strokeWidth="4"
        />

        {/* front fairing / windscreen */}
        <path
          d="M286 96 Q316 92 330 112 Q336 124 326 136 L300 130 Q294 110 286 96 Z"
          fill={color}
          stroke="#10243a"
          strokeWidth="4"
        />
        {/* windscreen highlight */}
        <path d="M300 102 Q318 102 324 116" stroke={accent} strokeWidth="3" opacity="0.8" />

        {/* tail hump */}
        <path d="M86 132 Q70 126 78 112 Q96 110 104 124" fill={color} stroke="#10243a" strokeWidth="4" />

        {/* clip-on bar */}
        <path d="M300 118 L324 112" strokeWidth="5" stroke="#10243a" />

        {/* exhaust */}
        <path d="M150 150 Q210 176 268 168" strokeWidth="7" stroke="#9aa0a6" />
        <path d="M150 150 Q210 176 268 168" strokeWidth="3" stroke="#10243a" opacity="0.4" />

        {/* belly / engine block */}
        <path d="M168 150 L240 148 L226 166 L182 166 Z" fill="#2a2e34" stroke="#10243a" strokeWidth="3" />

        {/* sketchy seat line */}
        <path d="M108 126 Q150 120 196 124" stroke={accent} strokeWidth="2.5" opacity="0.6" />
      </g>
    </svg>
  );
}

interface IconProps {
  className?: string;
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function HouseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className} {...stroke}>
      <path d="M7 23 L24 8 L41 23" />
      <path d="M11 21 V40 H37 V21" />
      <path d="M24 27c-2.6-2.8-7-.9-7 2.6 0 3.4 7 7.4 7 7.4s7-4 7-7.4c0-3.5-4.4-5.4-7-2.6z" />
    </svg>
  );
}

export function ClipboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className} {...stroke}>
      <rect x="12" y="11" width="24" height="30" rx="2.5" />
      <path d="M19 11V9.5A2.5 2.5 0 0121.5 7h5A2.5 2.5 0 0129 9.5V11" />
      <path d="M17 22l3 3 4-5" />
      <path d="M27.5 23H33" />
      <path d="M17 31l3 3 4-5" />
      <path d="M27.5 32H33" />
    </svg>
  );
}

export function HelmetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className} {...stroke}>
      <path d="M11 28a13 13 0 0126-1v5a4 4 0 01-4 4H19a8 8 0 01-8-8z" />
      <path d="M15 27h20" />
      <path d="M18 33h15" />
    </svg>
  );
}

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className} {...stroke}>
      <path d="M31 9a6.6 6.6 0 00-7.9 8.3L11 29.4a3.1 3.1 0 104.4 4.4l12.1-12.1A6.6 6.6 0 0036 14l-4.6 4.6-3.5-.9-.9-3.5z" />
    </svg>
  );
}
import { BikeStatus, STATUS_META } from "@/lib/bikes";

const TONE: Record<string, string> = {
  navy: "bg-ink-800 text-paper",
  red: "bg-rescue-red text-paper",
  green: "bg-rescue-green text-ink-900",
  gold: "bg-rescue-gold text-ink-900",
};

export default function StatusBadge({
  status,
  className = "",
}: {
  status: BikeStatus;
  className?: string;
}) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-display uppercase tracking-wider
        text-[11px] leading-none px-3 py-1.5 rounded-[3px] shadow-card ${TONE[meta.tone]} ${className}`}
    >
      <span className="text-current/90" aria-hidden>
        🐾
      </span>
      {meta.label}
    </span>
  );
}

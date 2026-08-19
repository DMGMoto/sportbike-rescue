/**
 * A ragged "torn paper" edge. Fill color comes from the text color
 * (currentColor), so set e.g. `text-ink` to match the navy behind it.
 * Use `flip` for the bottom edge of a band.
 */
export default function TornEdge({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1200 44"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
      style={flip ? { transform: "scaleY(-1)" } : undefined}
    >
      <path
        fill="currentColor"
        d="M0 0 H1200 V18 L1174 30 L1156 12 L1140 26 L1114 8 L1098 34 L1078 18
           L1054 28 L1036 10 L1016 33 L996 20 L980 14 L958 31 L940 7 L920 25
           L902 36 L884 16 L862 23 L844 9 L824 32 L802 19 L784 27 L762 11
           L744 34 L724 21 L706 15 L686 30 L668 8 L648 26 L630 17 L610 33
           L590 12 L570 24 L550 10 L530 29 L510 16 L490 35 L470 20 L452 13
           L432 28 L412 9 L392 25 L372 18 L352 32 L332 14 L312 23 L292 10
           L272 30 L252 19 L232 34 L212 16 L194 26 L174 11 L154 31 L134 21
           L116 14 L96 29 L76 8 L58 25 L38 18 L20 33 L0 24 Z"
      />
    </svg>
  );
}
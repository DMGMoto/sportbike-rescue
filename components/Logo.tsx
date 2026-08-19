export default function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt="Sportbike Rescue"
      className={`h-28 w-auto ${className}`}
    />
  );
}
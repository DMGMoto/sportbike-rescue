import { TimelineStep, TimelinePhase } from "@/lib/bikes";
import BikeSketch from "./BikeSketch";

const PHASE_COLOR: Record<TimelinePhase, string> = {
  intake: "#5c6470",
  during: "#8a6d3b",
  after: "#3f7bb5",
  graduation: "#E0A82E",
};

const TAPE_ROTATION = ["-rotate-3", "rotate-2", "-rotate-1", "rotate-3", "-rotate-2"];

export default function RescueTimeline({
  steps,
  bikeColor = "#2C6FB5",
  accent = "#F4EFE3",
  photos,
}: {
  steps: TimelineStep[];
  bikeColor?: string;
  accent?: string;
  photos?: (string | undefined)[];
}) {
  return (
    <div className="flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible">
      {steps.map((step, i) => {
        const isGrad = step.phase === "graduation";
        const sketchColor = isGrad ? bikeColor : PHASE_COLOR[step.phase];
        const photo = photos?.[i];
        return (
          <div
            key={step.day}
            className="relative flex shrink-0 snap-start basis-[62%] flex-col items-center sm:basis-[40%] lg:basis-auto"
          >
            {isGrad && (
              <div className="absolute -top-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap">
                <span className="font-hand text-xl text-signal" aria-hidden>
                  👑
                </span>
                <span className="ml-1 rounded-[3px] bg-signal px-2 py-1 font-display text-xs uppercase tracking-wide text-ink-900 shadow-card">
                  Graduation day!
                </span>
              </div>
            )}

            {/* portrait polaroid */}
            <div
              className={`relative w-full bg-paper p-2.5 pb-9 shadow-kennel ${
                TAPE_ROTATION[i % TAPE_ROTATION.length]
              }`}
            >
              <span className="tape left-1/2 -top-3 -translate-x-1/2" aria-hidden />
              <div className="relative aspect-[3/4] overflow-hidden bg-[#dcd4bf]">
                {photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo}
                    alt={step.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <BikeSketch
                    color={sketchColor}
                    accent={accent}
                    title={step.title}
                    className="h-full w-full object-contain p-2"
                  />
                )}
              </div>
              <p className="absolute bottom-2 left-0 right-0 text-center font-hand text-sm text-ink-900/80">
                {step.day}
              </p>
            </div>

            {/* caption */}
            <div className="mt-3 px-1 text-center">
              <p className="font-display text-sm uppercase tracking-wide text-paper">
                {step.title}
              </p>
              <p className="mt-1 text-xs leading-snug text-paper/60">{step.note}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export type BikeStatus =
  | "available"
  | "foster-care"
  | "medical-treatment"
  | "adopted";

export type TimelinePhase = "intake" | "during" | "after" | "graduation";

export interface TimelineStep {
  day: string;
  title: string;
  note: string;
  phase: TimelinePhase;
}

export interface Bike {
  slug: string;
  nickname: string;
  year: number;
  make: string;
  model: string;
  status: BikeStatus;
  adoptionFee: number;
  ageYears: number;
  /** 1–4 lightning bolts of spirited energy */
  temperament: number;
  temperamentLabel: string;
  loves: string[];
  notFanOf: string[];
  color: string; // used by the sketch placeholder
  accent: string;
  intake: string; // short intake blurb
  story: string;
  storyParagraphs?: string[];
  restoration: number; // 0–100
  timeline: TimelineStep[];
}

export const STATUS_META: Record<
  BikeStatus,
  { label: string; tone: "navy" | "red" | "green" | "gold" }
> = {
  available: { label: "Available", tone: "green" },
  "foster-care": { label: "In Foster Care", tone: "navy" },
  "medical-treatment": { label: "Medical Treatment", tone: "red" },
  adopted: { label: "Forever Home", tone: "gold" },
};

export const bikes: Bike[] = [
  {
    slug: "red",
    nickname: "Hyper D",
    year: 1987,
    make: "Suzuki",
    model: "GSX-R750 Hyper Endurancer",
    status: "adopted",
    adoptionFee: 7750,
    ageYears: 39,
    temperament: 3,
    temperamentLabel: "Spirited & loud",
    loves: ["Canyon roads", "Carbs", "Attention"],
    notFanOf: ["Rain", "Stock exhausts"],
    color: "#C8302B",
    accent: "#F4EFE3",
    intake: "Found under a tarp in a storage unit, two flat tires and a proud heart.",
    story:
      "Red came to us after three winters parked behind a self-storage unit, slowly forgotten. The carbs were gummed solid and the battery had long since given up, but the bones were honest. A FireBlade never really wants to sit still. After a full carb rebuild, fresh rubber, and a set of pipes that finally let her sing, Red is ready to chase apexes again. She is bold, a little dramatic, and absolutely worth it.",    storyParagraphs: [
      "This '87 GSX-R750 Hyper D was literally what you'd call a \"basket case.\" Thank goodness we came across him! This was a case of a previous owner being in over their head.",
      "It started with us going to buy one solitary part. When we arrived, the part was still attached to this guy's frame — and the owner said, \"Take the whole thing.\" Say what?!",
      "He didn't know anything about the frame or the parts, including whether they were stolen or had a clean status. First, we contacted CHP and found out we were clean! The process then began to reassemble and save what was possibly our saddest case to date.",
      "From a pallet and crates of parts, we had a whole bike… and we did make Hyper D \"whole\" again.",
      "When all's said and done, Hyper D became an exquisite '87 Hyper Endurancer tribute. Hyper D is a low-mileage GSX-R750, restored to perfection, that found a forever home with the assistance of Iconic Motorbikes!",
      "One of our proudest rescues — and this happy bike is alive and well!",
    ],
    restoration: 100,
    timeline: [
      { day: "Day 1", title: "A True Basket Case.", note: "A pile of parts, with unknown history.", phase: "intake" },
      { day: "Day 30", title: "Stripped & cleaned up", note: "Frame cleaned up, and the journey began.", phase: "during" },
      { day: "Day 75", title: "Engine rebuild, a fresh start", note: "Rebuilt carbs, fork seals, fresh fluids.", phase: "during" },
      { day: "Day 120", title: "Looking better every day", note: "New plastics, powder coated rims, dyno tuned.", phase: "after" },
      { day: "Forever home", title: "Ready for new adventures", note: "Cleared for adoption.", phase: "graduation" },
    ],
  },
  {
    slug: "blue",
    nickname: "Blue",
    year: 1989,
    make: "Suzuki",
    model: "GSX-R750",
    status: "foster-care",
    adoptionFee: 7995,
    ageYears: 37,
    temperament: 4,
    temperamentLabel: "High strung, big heart",
    loves: ["Track days", "High RPM", "New rubber"],
    notFanOf: ["Slow traffic"],
    color: "#2C6FB5",
    accent: "#F4EFE3",
    intake: "Surrendered by an owner moving overseas. Runs, but needs a routine.",
    story:
      "Blue is a textbook Gixxer: eager, a touch high strung, and happiest at the top of the tach. The previous owner kept up with oil changes but skipped everything else, so we are working through fork seals, a chain and sprockets, and a long-overdue valve check. In foster care she is already perking up. She wants a rider who understands that a 750 is not a couch.",
    restoration: 65,
    timeline: [
      { day: "Day 1", title: "Surrender intake", note: "Tired chain, weeping fork seals.", phase: "intake" },
      { day: "Day 20", title: "Health check", note: "Compression test, fluids, brake rebuild.", phase: "during" },
      { day: "Day 45", title: "In foster care", note: "New chain & sprockets, fork service.", phase: "during" },
    ],
  },
  {
    slug: "kawi",
    nickname: "Kawi",
    year: 1992,
    make: "Kawasaki",
    model: "ZX-7R",
    status: "medical-treatment",
    adoptionFee: 6995,
    ageYears: 34,
    temperament: 2,
    temperamentLabel: "Gentle giant",
    loves: ["Long rides", "Being fast"],
    notFanOf: ["Being ignored"],
    color: "#2E7D46",
    accent: "#F4EFE3",
    intake: "Dropped at the gate after a parking-lot tip-over. Recovering well.",
    story:
      "Kawi is the sweetheart of the kennel. A low-speed tip-over cracked a fairing and bent a lever, and a neglected cooling system left her running hot. She is currently in medical treatment for a water-pump seal and a new radiator. None of it is serious, she just needs patience and a little money in the right places. Big, green, and endlessly loyal.",
    restoration: 40,
    timeline: [
      { day: "Day 1", title: "Arrived at the gate", note: "Cracked fairing, overheating.", phase: "intake" },
      { day: "Day 14", title: "Diagnosis", note: "Water-pump seal, tired radiator.", phase: "during" },
    ],
  },
  {
    slug: "duke",
    nickname: "Duke",
    year: 1994,
    make: "Ducati",
    model: "916",
    status: "available",
    adoptionFee: 12995,
    ageYears: 31,
    temperament: 4,
    temperamentLabel: "Aristocratic drama",
    loves: ["Being photographed", "Twisty roads", "Italian tune-ups"],
    notFanOf: ["Cold mornings", "Being rushed"],
    color: "#B11E1E",
    accent: "#F4EFE3",
    intake: "An estate-sale rescue. Stunning, temperamental, completely worth it.",
    story:
      "Duke is the most glamorous resident we have ever taken in. A 916 carries itself like royalty and demands to be treated accordingly. The belts were ancient and the desmo valves needed attention, but underneath the dust was one of the prettiest motorcycles ever built. Fully serviced and singing again, Duke wants an experienced home that appreciates a little theater.",
    restoration: 100,
    timeline: [
      { day: "Day 1", title: "Estate-sale intake", note: "Decade of dust, ancient belts.", phase: "intake" },
      { day: "Day 40", title: "Desmo service", note: "Belts, valve clearances, fluids.", phase: "during" },
      { day: "Day 90", title: "Detailed & dialed", note: "Polished, tuned, road tested.", phase: "after" },
      { day: "Forever home", title: "Cleared for adoption", note: "Looking for an experienced home.", phase: "graduation" },
    ],
  },
  {
    slug: "yama",
    nickname: "Yama",
    year: 1987,
    make: "Yamaha",
    model: "FZR1000",
    status: "foster-care",
    adoptionFee: 6495,
    ageYears: 39,
    temperament: 3,
    temperamentLabel: "Old-school muscle",
    loves: ["Highway pulls", "EXUP burble", "Sunset rides"],
    notFanOf: ["Tight parking", "Ethanol fuel"],
    color: "#E6E2D6",
    accent: "#C8302B",
    intake: "A barn find with surprisingly low miles and a lot of cobwebs.",
    story:
      "Yama is a big, friendly bruiser from the golden age of literbikes. Pulled from a dusty barn with shockingly low mileage, she needed fresh fuel lines, a tank cleaning, and a thorough wake-up. The EXUP valve is freed and burbling again. In foster care she is learning that she is loved. She wants a rider who enjoys torque and nostalgia in equal measure.",
    restoration: 55,
    timeline: [
      { day: "Day 1", title: "Barn-find intake", note: "Cobwebs, varnished fuel.", phase: "intake" },
      { day: "Day 25", title: "Fuel system revival", note: "Tank clean, new lines, fresh gas.", phase: "during" },
    ],
  },
  {
    slug: "gixxer-jr",
    nickname: "Gixxer Jr.",
    year: 2001,
    make: "Suzuki",
    model: "GSX-R600",
    status: "available",
    adoptionFee: 5995,
    ageYears: 24,
    temperament: 3,
    temperamentLabel: "Eager beginner-friendly",
    loves: ["First-time riders", "Commutes", "Learning new tricks"],
    notFanOf: ["Wheelie attempts", "Curbs"],
    color: "#1F4E8C",
    accent: "#E6E2D6",
    intake: "A college-era project that never got finished. We finished it.",
    story:
      "Gixxer Jr. is the most approachable bike in the kennel. A half-finished college project, she arrived in boxes and good intentions. We reassembled her properly, sorted the wiring, and gave her a clean bill of health. She is light, forgiving, and a wonderful match for a rider stepping up to their first real sportbike. Endlessly patient and ready to learn.",
    restoration: 100,
    timeline: [
      { day: "Day 1", title: "Arrived in boxes", note: "A project paused mid-rebuild.", phase: "intake" },
      { day: "Day 35", title: "Reassembled & wired", note: "Harness sorted, fluids, sync.", phase: "during" },
      { day: "Day 70", title: "Road ready", note: "Inspected, tuned, test ridden.", phase: "after" },
      { day: "Forever home", title: "Cleared for adoption", note: "Great first sportbike.", phase: "graduation" },
    ],
  },
  {
    slug: "bandit",
    nickname: "Bandit",
    year: 1999,
    make: "Suzuki",
    model: "Bandit 1200",
    status: "adopted",
    adoptionFee: 4995,
    ageYears: 26,
    temperament: 2,
    temperamentLabel: "Reliable best friend",
    loves: ["Everything", "Everyone", "Coffee runs"],
    notFanOf: ["Goodbyes"],
    color: "#3A3F46",
    accent: "#F6C544",
    intake: "Graduated to a forever garage in spring. We still get postcards.",
    story:
      "Bandit was the easiest adoption we have ever done. An honest, do-everything standard that just needed tires, fluids, and a little faith. He found his forever garage with a first-time owner who sends us photos from every coffee run. This is exactly why we do it.",
    restoration: 100,
    timeline: [
      { day: "Day 1", title: "Intake", note: "Tired tires, otherwise honest.", phase: "intake" },
      { day: "Day 21", title: "Tidied up", note: "Tires, fluids, fresh battery.", phase: "during" },
      { day: "Forever home", title: "Adopted!", note: "Off to a happy first-time owner.", phase: "graduation" },
    ],
  },
];

export function getBike(slug: string) {
  return bikes.find((b) => b.slug === slug);
}

export const stats = [
  { value: "127", label: "Bikes Rescued", icon: "bike" as const },
  { value: "83", label: "In Foster Care", icon: "wrench" as const },
  { value: "76", label: "Successful Adoptions", icon: "heart" as const },
  { value: "∞", label: "Memories Made", icon: "key" as const },
];

export const foreverGarages = [
  {
    owner: "Marcus & 'Red'",
    location: "Trabuco Canyon, CA",
    bike: "1995 Honda CBR900RR",
    quote:
      "I told myself I wanted a clean bike. What I actually wanted was this one. Six months in and we have a standing Sunday date with the canyon.",
    color: "#C8302B",
  },
  {
    owner: "Priya & 'Bandit'",
    location: "Long Beach, CA",
    bike: "1999 Suzuki Bandit 1200",
    quote:
      "First bike, first season, zero regrets. The team walked me through everything and Bandit has never let me down once.",
    color: "#3A3F46",
  },
  {
    owner: "The Alvarez Garage & 'Duke'",
    location: "Pasadena, CA",
    bike: "1994 Ducati 916",
    quote:
      "He lives in the living room now. My wife pretends to be annoyed. Adopting a rescue meant getting a story, not just a bike.",
    color: "#B11E1E",
  },
  {
    owner: "Dev & 'Sprocket'",
    location: "San Diego, CA",
    bike: "1997 Honda VFR750",
    quote:
      "They matched me with a bike that fit my skill level instead of my ego. Best advice I never knew I needed.",
     color: "#2C6FB5",
  },
];
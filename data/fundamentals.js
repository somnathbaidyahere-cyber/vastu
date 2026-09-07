import { Grid3x3, Layers, Ruler, Scale, Sun, Wind } from "lucide-react";



export const faqs = [
  {
    question: "What is Vastu Shastra in simple terms?",
    answer:
      "Vastu Shastra is a traditional Indian body of knowledge about building and arranging spaces. It studies how orientation, light, air movement, weight distribution and proportion affect the way a dwelling feels and functions. Most of its rules were written for a specific climate and building method, so they are best read as principles rather than fixed commandments.",
  },
  {
    question: "Do I need to change my house to follow Vastu?",
    answer:
      "Rarely. Most fundamentals are about placement and use — which corner stays heavy, where light enters first, which zone stays uncluttered. Understanding the reasoning usually leads to small, reversible adjustments rather than structural work.",
  },
  {
    question: "What is the brahmasthan?",
    answer:
      "The brahmasthan is the approximate geometric centre of a plan. Traditionally it is kept open and unburdened — no heavy structure, no clutter, no service function — so the plan has a calm middle that the rest of the layout can breathe around it.",
  },
  {
    question: "Which direction should I learn first?",
    answer:
      "North. Once true north is established for the whole home, every other zone is understood relative to it. Learning a single room's direction before fixing the reference point is the most common beginner mistake.",
  },
  {
    question: "Is Vastu the same as Feng Shui?",
    answer:
      "No. Both study space and orientation, but they come from different traditions with different vocabularies, diagrams and rules. Mixing the two usually produces contradictions, so it is better to study one framework at a time.",
  },
  {
    question: "Can I learn Vastu without a consultant?",
    answer:
      "The fundamentals — directions, elements, zoning and the logic behind them — are entirely learnable on your own. A consultant becomes useful when a specific property has constraints that the general principles do not resolve.",
  },
];



export const learningPath = [
  { n: "01", title: "What Vastu actually claims", body: "Separate the shastra's structural logic from later folklore. Learn what the texts say about light, air, weight and proportion — and what they never claimed at all.", meta: "6 min read · Orientation" },
  { n: "02", title: "The five elements in a plan", body: "Earth, water, fire, air and space are placed by nature, not preference. See where each belongs and why the south-east resists water and the north-east resists weight.", meta: "8 min read · Pancha Bhuta" },
  { n: "03", title: "Reading the grid", body: "The plan is divided into padas — a grid that turns a vague floor plan into readable zones. Understand the 9×9 division and the sensitive joints within it.", meta: "9 min read · Mandala" },
  { n: "04", title: "Applying it room by room", body: "Kitchen, bed, prayer, storage, stairs. The order a consultant walks a home, and which corrections genuinely matter first.", meta: "10 min read · Griha Vinyasa" },
];

export const concepts = [
  { icon: Grid3x3, name: "Pada", sanskrit: "The grid module", body: "The unit square that divides a plan into readable zones. Everything in Vastu is measured against this division rather than against walls." },
  { icon: Sun, name: "Brahmasthan", sanskrit: "The open centre", body: "The plan's geometric middle, kept light and unobstructed so the layout has a calm core." },
  { icon: Scale, name: "Weight balance", sanskrit: "Bhara Vinyasa", body: "Mass belongs in the south and west; openness belongs in the north and east. Most discomfort in a plan traces back to this being reversed." },
  { icon: Wind, name: "Air and light path", sanskrit: "Vayu Marga", body: "How morning light enters and how cross-ventilation moves decides the mood of a room long before any remedy does." },
  { icon: Ruler, name: "Proportion", sanskrit: "Ayadi", body: "Traditional measure systems relate a building's dimensions to each other, so rooms feel resolved rather than arbitrary." },
  { icon: Layers, name: "Marma points", sanskrit: "Sensitive joints", body: "Intersections in the grid treated as structurally sensitive — kept free of heavy columns, beams and cuts." },
];

export const directions = [
  {
    code: "N",
    name: "North",
    note: "Opportunity, flow, openness",
    accentColor: "from-blue-500/10 to-cyan-500/5 text-blue-600 dark:text-blue-400 border-blue-500/20",
    customBg: "rgba(59, 130, 246, 0.08)", // Light Water Blue
  },
  {
    code: "NE",
    name: "North-East",
    note: "Water, light, stillness",
    accentColor: "from-sky-400/10 to-indigo-500/5 text-sky-600 dark:text-sky-400 border-sky-400/20",
    customBg: "rgba(56, 189, 248, 0.08)", // Soft Light Cyan
  },
  {
    code: "E",
    name: "East",
    note: "Morning sun, beginnings",
    accentColor: "from-amber-400/10 to-emerald-500/5 text-amber-600 dark:text-amber-400 border-amber-400/20",
    customBg: "rgba(251, 191, 36, 0.08)", // Sunrise Gold
  },
  {
    code: "SE",
    name: "South-East",
    note: "Fire, the kitchen zone",
    accentColor: "from-orange-500/10 to-red-500/5 text-orange-600 dark:text-orange-400 border-orange-500/20",
    customBg: "rgba(249, 115, 22, 0.08)", // Warm Fire Orange
  },
  {
    code: "S",
    name: "South",
    note: "Rest, weight, retreat",
    accentColor: "from-rose-500/10 to-purple-500/5 text-rose-600 dark:text-rose-400 border-rose-500/20",
    customBg: "rgba(244, 63, 94, 0.08)", // Sunset Crimson
  },
  {
    code: "SW",
    name: "South-West",
    note: "Earth, stability, mass",
    accentColor: "from-stone-500/10 to-amber-700/5 text-stone-600 dark:text-stone-400 border-stone-500/20",
    customBg: "rgba(120, 113, 108, 0.08)", // Grounded Earth
  },
  {
    code: "W",
    name: "West",
    note: "Gain, evening, storage",
    accentColor: "from-purple-500/10 to-indigo-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20",
    customBg: "rgba(168, 85, 247, 0.08)", // Evening Violet
  },
  {
    code: "NW",
    name: "North-West",
    note: "Air, movement, guests",
    accentColor: "from-teal-400/10 to-emerald-400/5 text-teal-600 dark:text-teal-400 border-teal-400/20",
    customBg: "rgba(45, 212, 191, 0.08)", // Fresh Air Teal
  },
];
export const tools = [
  { to: "/tools/compass", icon: Wind, name: "Vastu Compass", body: "A guided way to find your home's centre and establish true north before reading any zone." },
  { to: "/tools/mandala", icon: Grid3x3, name: "Mandala", body: "The 81-pada grid laid over a plan, with the padas, deities and sensitive marma points explained." },
];

export const articles = [
  { img: "/backgrounds/open-courtyard.webp", alt: "Sunlit ivory Indian courtyard with clean stone paving", kicker: "Space", slug:"courtyard-space", title: "Why the centre is kept empty", body: "The courtyard house explains the brahmasthan better than any diagram — an open middle that lets light and air reach every room around it." },
  { img: "/backgrounds/home-entrance.webp", alt: "Carved wooden doorway with a traditional stone threshold", kicker: "Entrance",slug:"entrance-threshold", title: "The threshold as a decision", body: "Entrance placement carries more weight in the texts than almost any interior rule. Here is the reasoning behind it, stated plainly." },
  { img: "/backgrounds/house-floor-plan.webp", alt: "Hand-drawn architectural floor plan on cream paper with a brass ruler", kicker: "Method",slug:"reading-floor-plan", title: "Reading a floor plan honestly", body: "Before applying a single rule, learn to find the true outline, the centre and the axis of the plan you actually have." },
];

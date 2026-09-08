import {
  Droplets,
  Flame,
  Mountain,
  Wind,
} from "lucide-react";

export const elementIcon = {
  Water: Droplets,
  Fire: Flame,
  Earth: Mountain,
  Air: Wind,
};

export const directions = [
  {
    code: "N",
    name: "North",
    sanskrit: "Uttara",
    deity: "Kubera",
    element: "Water",
    quality: "Wealth & career flow",
    meaning:
      "The direction associated with income, opportunity and the movement of resources into a home.",
    significance:
      "Ruled by Kubera, the keeper of wealth, north is traditionally kept open and unobstructed so that opportunity can enter and circulate rather than pool in one place.",
    practical:
      "Keep this side of the plot lighter than the south — lower boundary walls, fewer heavy structures, and openings that let the zone breathe.",
  },
  {
    code: "NE",
    name: "Northeast",
    sanskrit: "Ishanya",
    deity: "Ishana",
    element: "Water",
    quality: "Clarity & spiritual focus",
    meaning:
      "The most sacred of the eight zones — a corner reserved for stillness rather than activity.",
    significance:
      "Ishanya is where water and space meet, traditionally read as the source of a home's mental clarity. It is the one zone Vastu almost never allows to be built over.",
    practical:
      "Best left as the lightest, most open corner of the plot — a puja room, a well, or simply empty ground, never the heaviest structure on site.",
  },
  {
    code: "E",
    name: "East",
    sanskrit: "Purva",
    deity: "Indra",
    element: "Fire",
    quality: "Growth & vitality",
    meaning:
      "The direction of the rising sun — associated with early light, health and steady growth.",
    significance:
      "Indra governs east as the direction of ascent. Morning sun entering from this side is treated as literally and symbolically vitalising for the household.",
    practical:
      "Favour windows and entrances here over solid walls, so the first light of day reaches as far into the plan as possible.",
  },
  {
    code: "SE",
    name: "Southeast",
    sanskrit: "Agneya",
    deity: "Agni",
    element: "Fire",
    quality: "Energy & transformation",
    meaning:
      "The zone of heat, combustion and conversion — where raw material becomes useful.",
    significance:
      "Agni's corner is where fire is put to work. Traditionally this is the kitchen's home, kept apart from the calm, cool northeast it sits opposite.",
    practical:
      "Place the kitchen and any heat-generating equipment here, with clear separation from water storage or sleeping areas.",
  },
  {
    code: "S",
    name: "South",
    sanskrit: "Dakshina",
    deity: "Yama",
    element: "Earth",
    quality: "Rest & ancestral stability",
    meaning:
      "The direction of settlement — mass, permanence, and the household's continuity.",
    significance:
      "Ruled by Yama, south carries associations with endings and rest rather than growth, making it suited to the quieter, heavier functions of a home.",
    practical:
      "A natural location for taller construction and thicker walls — this side can carry more weight than north or east without disturbing the plan's balance.",
  },
  {
    code: "SW",
    name: "Southwest",
    sanskrit: "Nairutya",
    deity: "Niruti",
    element: "Earth",
    quality: "Strength & grounding",
    meaning:
      "The plot's heaviest, most solid corner — the anchor the rest of the home rests against.",
    significance:
      "Southwest is treated as the seat of stability. Traditional texts describe it as the corner that should never be lower or lighter than any other.",
    practical:
      "Reserve for the master bedroom or the tallest, most solid mass on the plot — this is where height and weight belong.",
  },
  {
    code: "W",
    name: "West",
    sanskrit: "Paschima",
    deity: "Varuna",
    element: "Air",
    quality: "Gains & completion",
    meaning:
      "The direction of the setting sun — associated with consolidation and steady returns.",
    significance:
      "Varuna's zone is read as supportive of long-term gain rather than sudden opportunity, favouring dining and gathering spaces over bedrooms.",
    practical:
      "Well suited to dining rooms, children's rooms or study spaces — active in the evening, without the intensity of the fire zones.",
  },
  {
    code: "NW",
    name: "Northwest",
    sanskrit: "Vayavya",
    deity: "Vayu",
    element: "Air",
    quality: "Movement & relationships",
    meaning:
      "The zone of circulation — air, guests, and the coming and going of people.",
    significance:
      "Vayu governs change and movement, which is why this corner is traditionally linked to guests, travel and short-term stays rather than permanent occupants.",
    practical:
      "A natural fit for guest rooms, garages or entryways — spaces defined by people passing through rather than settling in.",
  },
];

export const compassPositions = {
  N: { x: 50, y: 12 },
  NE: { x: 76.9, y: 23.1 },
  E: { x: 88, y: 50 },
  SE: { x: 76.9, y: 76.9 },
  S: { x: 50, y: 88 },
  SW: { x: 23.1, y: 76.9 },
  W: { x: 12, y: 50 },
  NW: { x: 23.1, y: 23.1 },
};

directions.forEach((direction) => {
  direction.pos = compassPositions[direction.code];
});

export const cardinal = directions.filter((direction) =>
  ["N", "E", "S", "W"].includes(direction.code)
);

export const intercardinal = directions.filter((direction) =>
  ["NE", "SE", "SW", "NW"].includes(direction.code)
);
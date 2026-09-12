import {
  Aperture,
  Compass,
  Droplets,
  Footprints,
  Flame,
  Leaf,
  Mountain,
  Ratio,
  Sun,
  Wind,
  CircleDot,
} from "lucide-react";

export const spacePrinciples = [
  {
    icon: Compass,
    name: "Direction",
    note: "Places a space within its wider environmental context.",
  },
  {
    icon: Sun,
    name: "Light",
    note: "Changes depth, warmth and attention throughout the day.",
  },
  {
    icon: Footprints,
    name: "Movement",
    note: "Turns rooms into a sequence rather than isolated boxes.",
  },
  {
    icon: Leaf,
    name: "Elements",
    note: "Connects material, climate and use to different zones.",
  },
  {
    icon: Ratio,
    name: "Proportion",
    note: "Balances enclosure, height and human scale.",
  },
  {
    icon: Aperture,
    name: "Openness",
    note: "Creates views, pauses and room to breathe.",
  },
];

export const spaceElements = [
  {
    id: "earth",
    name: "Earth",
    sanskrit: "Prithvi",
    icon: Mountain,
    character: "Weight & permanence",
    space:
      "Grounded materials, stable furniture and spaces suited to sustained rest.",
    zone: "South-West",
  },
  {
    id: "water",
    name: "Water",
    sanskrit: "Jala",
    icon: Droplets,
    character: "Reflection & flow",
    space:
      "Open sightlines, gentle light and spaces that allow movement to continue.",
    zone: "North-East",
  },
  {
    id: "fire",
    name: "Fire",
    sanskrit: "Agni",
    icon: Flame,
    character: "Heat & transformation",
    space:
      "Active zones where energy, warmth, tools or transformation are present.",
    zone: "South-East",
  },
  {
    id: "air",
    name: "Air",
    sanskrit: "Vayu",
    icon: Wind,
    character: "Exchange & movement",
    space:
      "Ventilation, circulation and thresholds that allow activity to flow.",
    zone: "North-West",
  },
  {
    id: "space",
    name: "Space",
    sanskrit: "Akasha",
    icon: CircleDot,
    character: "Pause & connection",
    space:
      "An unburdened centre that allows surrounding spaces to relate to one another.",
    zone: "Centre",
  },
];

export const spaceExperiences = [
  {
    name: "Living",
    label: "Connection without crowding",
    image: "/images/spaces/living.jpg",
    alt: "Indian living space opening toward a green courtyard",
  },
  {
    name: "Working",
    label: "Focus held by daylight",
    image: "/images/spaces/working.jpg",
    alt: "Minimal workspace beside a large daylight opening",
  },
  {
    name: "Learning",
    label: "Calm attention and clarity",
    image: "/images/spaces/learning.jpg",
    alt: "Quiet reading space with natural light",
  },
  {
    name: "Gathering",
    label: "A generous shared centre",
    image: "/images/spaces/gathering.jpg",
    alt: "Shared gathering space opening toward a courtyard",
  },
  {
    name: "Rest",
    label: "Shelter, quiet and retreat",
    image: "/images/spaces/rest.jpg",
    alt: "Quiet bedroom with a garden view",
  },
  {
    name: "Transition",
    label: "Thresholds that prepare us",
    image: "/images/spaces/transition.jpg",
    alt: "Architectural passage leading toward a sunlit threshold",
  },
];

export const spaceMistakes = [
  {
    mistake: "Designing a room in isolation",
    correction:
      "A space inherits light, movement and meaning from the spaces around it.",
  },
  {
    mistake: "Treating openness as emptiness",
    correction:
      "Useful openness is shaped by edges, views and a reason to pause.",
  },
  {
    mistake: "Following direction without climate",
    correction:
      "Orientation must still respond to local sun, rain, wind and surroundings.",
  },
  {
    mistake: "Filling every wall",
    correction:
      "Visual weight and storage need deliberate placement.",
  },
  {
    mistake: "Confusing decoration with balance",
    correction:
      "Balance begins with proportion and circulation before objects or colour.",
  },
];
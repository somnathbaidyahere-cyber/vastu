import {
  BookOpen,
  Compass,
  Flame,
  Mountain,
  Wind,
  Moon,
  Home,
} from "lucide-react";

export const learnChapters = [
  {
    href: "/learn/fundamentals",
    kicker: "Start here",
    name: "Fundamentals",
    sanskrit: "Vastu Shastra",
    blurb:
      "The grammar of the shastra — the mandala, the axis, the brahmasthan, and why orientation decides the mood of a home.",
    reads: [
      "What Vastu really claims",
      "The 81-pada grid",
      "Reading a plot honestly",
    ],
    icon: BookOpen,
  },
  {
    href: "/learn/elements",
    kicker: "Chapter two",
    name: "Five Elements",
    sanskrit: "Pancha Bhuta",
    blurb:
      "Earth, water, fire, air and space — where each element belongs, and what happens when they are placed against their nature.",
    reads: [
      "Element to direction map",
      "Common misplacements",
      "Gentle remedies",
    ],
    icon: Flame,
  },
  {
    href: "/learn/directions",
    kicker: "Chapter three",
    name: "Directions",
    sanskrit: "Dik Nirnaya",
    blurb:
      "Sixteen directional zones, each with a presiding energy. Learn what the north-east asks for and why the south-west must stay heavy.",
    reads: [
      "The 16 zones",
      "Deity of each direction",
      "Entrance selection",
    ],
    icon: Compass,
  },
  {
    href: "/learn/rooms",
    kicker: "Apply it",
    name: "Rooms",
    sanskrit: "Griha Vinyasa",
    blurb:
      "Vastu guidance for every room — kitchen, bedroom, pooja room, staircase, bath and study, in the order a consultant walks a home.",
    reads: [
      "Room-by-room checklists",
      "Kitchen & pooja rules",
      "What to fix first",
    ],
    icon: Home,
  },
];

export const elements = [
  {
    icon: Mountain,
    label: "Earth",
    sanskrit: "Prithvi",
    zone: "South-West",
  },
  {
    icon: "water",
    label: "Water",
    sanskrit: "Jal",
    zone: "North-East",
  },
  {
    icon: Flame,
    label: "Fire",
    sanskrit: "Agni",
    zone: "South-East",
  },
  {
    icon: Wind,
    label: "Air",
    sanskrit: "Vayu",
    zone: "North-West",
  },
  {
    icon: Moon,
    label: "Space",
    sanskrit: "Akash",
    zone: "Centre",
  },
];

export const studyPath = [
  {
    step: "01",
    title: "Understand the frame",
    body:
      "Read the fundamentals so the vocabulary — pada, marma, brahmasthan — stops feeling foreign.",
    href: "/learn/fundamentals",
  },
  {
    step: "02",
    title: "Feel the elements",
    body:
      "Learn how the five elements sit in a plan before you judge any single room.",
    href: "/learn/elements",
  },
  {
    step: "03",
    title: "Orient the directions",
    body:
      "Fix true north, then walk the sixteen zones and note what each one governs.",
    href: "/learn/directions",
  },
  {
    step: "04",
    title: "Correct room by room",
    body:
      "Finally apply the rules where they matter most — kitchen, bed, and place of prayer.",
    href: "/learn/rooms",
  },
];

export const sutras = [
  {
    text:
      "The dwelling is the body of Vastu Purusha; wound no part of it carelessly.",
    source: "Mayamatam",
  },
  {
    text:
      "Where light enters first, place water and stillness; where fire lives, keep the west shut.",
    source: "Manasara Shilpa Shastra",
  },
];
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
    kicker: "Start here . Vastu Basics",
    name: "Vastu Shastra Fundamentals",
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
    name: "Five Elements of Vastu",
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
    reads: ["The 16 zones", "Deity of each direction", "Entrance selection"],
    icon: Compass,
  },
  {
    href: "/learn/rooms",
    kicker: "Apply it",
    name: "Vastu for Rooms",
    sanskrit: "Griha Vinyasa",
    blurb:
      "Practical Vastu guidance for every room — kitchen, bedroom, pooja room, staircase, bath and study & other rooms.",
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
    img: "/elements/earth.jpg",
    alt: "table-land",
  },
  {
    icon: "water",
    label: "Water",
    sanskrit: "Jal",
    zone: "North-East",
    img: "/elements/water.jpg",
    alt: "still water",
  },
  {
    icon: Flame,
    label: "Fire",
    sanskrit: "Agni",
    zone: "South-East",
    img: "/elements/fire.jpg",
    alt: "flame",
  },
  {
    icon: Wind,
    label: "Air",
    sanskrit: "Vayu",
    zone: "North-West",
    img: "/elements/air.jpg",
    alt: "cloud in sky",
  },
  {
    icon: Moon,
    label: "Space",
    sanskrit: "Akash",
    zone: "Centre",
    img: "/elements/space.jpg",
    alt: "jupitar-moon",
  },
];

export const studyPath = [
  {
    step: "01",
    title: "Understand the frame",
    body: "Read the fundamentals so the vocabulary — pada, marma, brahmasthan — stops feeling foreign.",
    href: "/learn/fundamentals",
  },
  {
    step: "02",
    title: "Feel the elements",
    body: "Learn how the five elements sit in a plan before you judge any single room.",
    href: "/learn/elements",
  },
  {
    step: "03",
    title: "Orient the directions",
    body: "Fix true north, then walk the sixteen zones and note what each one governs.",
    href: "/learn/directions",
  },
  {
    step: "04",
    title: "Correct room by room",
    body: "Finally apply the rules where they matter most — kitchen, bed, and place of prayer.",
    href: "/learn/rooms",
  },
];

export const sutras = [
  {
    text: "The dwelling is the body of Vastu Purusha; wound no part of it carelessly.",
    source: "Mayamatam",
  },
  {
    text: "Where light enters first, place water and stillness; where fire lives, keep the west shut.",
    source: "Manasara Shilpa Shastra",
  },
];

export const faqs = [
  {
    question: "What is Vastu Shastra?",
    answer:
      "Vastu Shastra is a traditional Indian system of architecture and spatial planning that considers directions, elements, proportions, and the arrangement of spaces to create a harmonious environment."
  },
  {
    question: "Why is Vastu important?",
    answer:
      "Vastu provides a traditional framework for understanding how a space is oriented, organized, and used. Learning its principles can help you make more intentional decisions about the layout and use of your home or workplace."
  },
  {
    question: "Why are directions important in Vastu?",
    answer:
      "Directions form an important part of Vastu because different areas of a building are traditionally associated with different qualities, elements, and activities. Understanding orientation is therefore one of the first steps in applying Vastu."
  },
  {
    question: "What is the Vastu Purusha Mandala?",
    answer:
      "The Vastu Purusha Mandala is a geometric framework used in Vastu to organize and understand space. It divides a site into a structured grid of zones, helping relate different parts of a space to directions and traditional principles."
  },
  {
    question: "Can Vastu principles be applied to modern homes?",
    answer:
      "Yes. Vastu principles can be studied and thoughtfully applied to modern homes without treating every traditional guideline as an absolute rule. Practical considerations such as architecture, safety, ventilation, natural light, and building requirements should always be considered alongside Vastu."
  },
  {
    question: "Do I need to rebuild my home to follow Vastu?",
    answer:
      "No. Understanding Vastu does not automatically mean making major structural changes. Many people begin by understanding the orientation, layout, room usage, and existing characteristics of their space before considering any changes."
  }
];
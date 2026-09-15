import bedroomImage from "/public/spaces/bedroom.jpg";
import kitchenImage from "/public/spaces/spaces-light.jpg.asset.json";
import livingImage from "/public/spaces/spaces-living.jpg.asset.json";
import studyImage from "/public/spaces/spaces-working.jpg.asset.json";
import diningImage from "/public/spaces/spaces-gathering.jpg.asset.json";
import prayerImage from "/public/spaces/spaces-learning.jpg.asset.json";
import entranceImage from "/public/spaces/spaces-transition.jpg.asset.json";
import bathroomImage from "/public/spaces/spaces-outside-in.jpg.asset.json";
import courtyardImage from "/public/spaces/spaces-hero.jpg.asset.json";

export const rooms = [
  {
    slug: "bedroom",
    name: "Bedroom",
    purpose: "Rest & restoration",
    image: bedroomImage,
    alt: "Quiet bedroom with warm walls and a framed garden view",
    introduction: "A bedroom works best when the home grows quieter around it. Enclosure, filtered light and low movement help the body understand that the day is ending.",
    qualities: ["Privacy", "Stillness", "Grounding"],
    observe: "Notice the path from the door to the bed, the morning light, and what the room overlooks.",
    consider: "Protect rest from busy circulation and give the bed a visually steady background.",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    purpose: "Nourishment & activity",
    image: kitchenImage,
    alt: "Warm daylight moving across a calm architectural interior",
    introduction: "The kitchen concentrates heat, water, movement and daily ritual. A clear working sequence matters as much as its position within the home.",
    qualities: ["Heat", "Rhythm", "Transformation"],
    observe: "Trace the relationship between preparation, cooking, washing, storage and ventilation.",
    consider: "Keep active surfaces bright, uncluttered and comfortably separated from through-traffic.",
  },
  {
    slug: "living-room",
    name: "Living Room",
    purpose: "Connection & gathering",
    image: livingImage,
    alt: "Ivory living room opening fully to a green courtyard",
    introduction: "The living room receives people and holds shared time. It should feel connected to arrival without becoming a corridor for the whole house.",
    qualities: ["Welcome", "Conversation", "Flow"],
    observe: "Look at how people enter, gather, see one another and move onward to private rooms.",
    consider: "Use furniture to shape conversation while preserving an easy, legible path through the room.",
  },
  {
    slug: "study",
    name: "Study",
    purpose: "Focus & work",
    image: studyImage,
    alt: "Minimal home workspace beside a large daylight window",
    introduction: "A study supports sustained attention through steady light, a composed view and a clear boundary from household movement.",
    qualities: ["Clarity", "Attention", "Order"],
    observe: "Note glare, background noise, the direction you face and what enters your peripheral view.",
    consider: "Give the work surface useful daylight and a sense of support rather than exposure behind the seat.",
  },
  {
    slug: "dining",
    name: "Dining",
    purpose: "Sharing & nourishment",
    image: diningImage,
    alt: "Long dining table beneath a timber veranda beside a courtyard",
    introduction: "Dining turns nourishment into a shared pause. Its strongest relationship is often with the kitchen, living space and the natural rhythm of daylight.",
    qualities: ["Sharing", "Pause", "Belonging"],
    observe: "Notice the distance from kitchen to table and whether circulation cuts through the gathering.",
    consider: "Create a centred, comfortable place where serving is easy and conversation is not interrupted.",
  },
  {
    slug: "prayer-quiet-space",
    name: "Prayer / Quiet Space",
    purpose: "Reflection & stillness",
    image: prayerImage,
    alt: "Stone-lined reading alcove with books and soft natural light",
    introduction: "A quiet space needs less visual information, not more decoration. Light, proportion and distance from household activity create its contemplative character.",
    qualities: ["Reflection", "Openness", "Restraint"],
    observe: "Listen for household noise and notice whether the eye can settle without distraction.",
    consider: "Choose a clean, lightly held edge of the home with gentle light and room to pause.",
  },
  {
    slug: "entrance",
    name: "Entrance",
    purpose: "Arrival & transition",
    image: entranceImage,
    alt: "Rhythmic stone passage leading through a sunlit threshold",
    introduction: "The entrance is a sequence rather than a single door. It shifts us from public to private life and establishes the first reading of the home.",
    qualities: ["Arrival", "Orientation", "Threshold"],
    observe: "Walk the approach slowly and notice shelter, light, views and the first choice of direction.",
    consider: "Make arrival clear and calm, with enough pause to understand where the home continues.",
  },
  {
    slug: "bathroom",
    name: "Bathroom",
    purpose: "Cleansing & release",
    image: bathroomImage,
    alt: "Contemporary Indian interior opening to a planted outdoor edge",
    introduction: "Bathrooms combine water, privacy and ventilation in a compact space. Their success depends on dryness, daylight and separation from shared living areas.",
    qualities: ["Release", "Freshness", "Privacy"],
    observe: "Check ventilation, natural light, wet and dry zones, and the relationship to adjoining rooms.",
    consider: "Prioritise drainage, air movement and a clear threshold between cleansing and living spaces.",
  },
  {
    slug: "courtyard-open-space",
    name: "Courtyard / Open Space",
    purpose: "Light & openness",
    image: courtyardImage,
    alt: "Contemporary Indian courtyard framed by stone colonnades and a reflecting pool",
    introduction: "An open space gives the home a place to breathe. It gathers sky, weather and light while helping surrounding rooms remain connected to nature.",
    qualities: ["Light", "Breath", "Connection"],
    observe: "Watch how sun, rain and air move through the opening and into the rooms around it.",
    consider: "Keep the open centre purposeful and legible rather than treating it as leftover space.",
  },
];

export function getRoom(slug) {
  return rooms.find((room) => room.slug === slug);
}
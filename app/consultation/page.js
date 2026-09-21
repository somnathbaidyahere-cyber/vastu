import ConsultationHero from "@/components/pages/consultation/ConsultationHero";
import ConsultationRelevance from "@/components/pages/consultation/ConsultationRelevance";
import ConsultationScope from "@/components/pages/consultation/ConsultationScope";
import ConsultationApproach from "@/components/pages/consultation/ConsultationApproach";
import ConsultationPreparation from "@/components/pages/consultation/ConsultationPreparation";
import ConsultationProcess from "@/components/pages/consultation/ConsultationProcess";
import ConsultationTrust from "@/components/pages/consultation/ConsultationTrust";
import ConsultationBooking from "@/components/pages/consultation/ConsultationBooking";
import ConsultationClosing from "@/components/pages/consultation/ConsultationClosing";
import ConsultationConversation from "@/components/pages/consultation/ConsultationConversation"

export const metadata = {
  title: "Vastu Consultation for Your Home | VastuVeda",
  description:
    "Request a thoughtful Vastu consultation for a new build, renovation, move, or existing home. Understand your space through orientation, layout, elements, and context.",
};

export default function ConsultationPage() {
  return (
    <main className="min-h-screen bg-background">
      <ConsultationHero />

      <ConsultationRelevance />

      <ConsultationScope />

      <ConsultationApproach />

      <ConsultationPreparation />

      <ConsultationProcess />

      {/* <ConsultationTrust /> */}

      <ConsultationConversation/>

      {/* <ConsultationBooking />

      <ConsultationClosing /> */}
    </main>
  );
}
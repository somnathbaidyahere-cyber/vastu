import { ContactProvider } from "@/components/pages/contact/ContactContext";

import Hero from "@/components/pages/contact/Hero";
import TopicSelection from "@/components/pages/contact/TopicSelection";
import ContactFormSection from "@/components/pages/contact/ContactFormSection";
import DirectContactGrid from "@/components/pages/contact/DirectContactGrid";
import ConsultationBridge from "@/components/pages/contact/ConsultationBridge";
import ClosingStatement from "@/components/pages/contact/ClosingStatement";


export default function ContactPage() {


  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">

      <Hero />

      <ContactProvider>
        <TopicSelection />
        <ContactFormSection />
      </ContactProvider>

      <DirectContactGrid />

      <ConsultationBridge />

      <ClosingStatement />
    </div>
  );
}



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/data/fundamentals";

export default function FAQSection() {
  return (
    <section className="border-t border-border/60 bg-ivory-pattern px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4"><span className="text-sm font-medium uppercase tracking-widest text-primary">FAQ</span><h2 className="mt-3 text-3xl font-medium text-foreground sm:text-4xl">Questions beginners ask</h2></div>
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible defaultValue="faq-0" className="border-t border-border">
            {faqs.map((faq, i) => <AccordionItem key={faq.q} value={`faq-${i}`}><AccordionTrigger className="py-6 text-left text-base text-foreground hover:no-underline">{faq.q}</AccordionTrigger><AccordionContent className="min-h-28 max-w-2xl pr-8 text-sm leading-relaxed text-muted-foreground">{faq.a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

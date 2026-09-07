export default function IntroductionSection() {
  return (
    <section className="border-y border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4"><h2 className="text-3xl font-medium text-foreground sm:text-4xl">What Vastu Shastra is</h2></div>
        <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-8">
          <p>Vastu Shastra is India&apos;s traditional discipline of building. Written across texts such as the <em>Mayamatam</em> and the <em>Manasara</em>, it describes how a dwelling should meet its site: where light should enter, where mass should sit, how air should move through it, and how its dimensions should relate to one another.</p>
          <p>Read closely, most of its rules are climate-responsive architecture. A heavy south-west wall shields the harshest afternoon sun. An open north-east admits gentle morning light. A kitchen in the south-east catches the prevailing draught away from the sleeping quarters. The reasoning is physical before it is symbolic.</p>
          <p>The fundamentals below give you enough grounding to read a plan for yourself — to see why a room feels wrong before anyone tells you it does. That is the whole purpose of this chapter: judgement, not superstition.</p>
        </div>
      </div>
    </section>
  );
}

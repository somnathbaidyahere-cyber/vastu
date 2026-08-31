import React from 'react'

export default function Features() {
  return (
         <section className="border-t border-border/60 bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">
                Why VastuGuru
              </span>
              <h2 className="mt-3 text-3xl font-heading font-medium text-foreground sm:text-4xl">
                Designed for modern Indian homes
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether you are building a new home, renovating an apartment, or simply seeking
                peace, our platform offers practical Vastu guidance tailored to contemporary living.
              </p>

              <div className="mt-10 space-y-6">
                <FeatureRow
                  number="01"
                  title="Interactive Vastu Compass"
                  description="Find accurate directional alignments for your plot, rooms, and furniture placement."
                />
                <FeatureRow
                  number="02"
                  title="Room-by-Room Analysis"
                  description="Get specific recommendations for kitchens, bedrooms, pooja rooms, and entrances."
                />
                <FeatureRow
                  number="03"
                  title="Expert Consultations"
                  description="Book one-on-one sessions with certified Vastu consultants for personalized remedies."
                />
              </div>
            </div>

            <div className="relative flex items-center">
              <div className="absolute -inset-4 rounded-4xl bg-linear-to-tr from-brand-saffron/10 to-brand-gold/10 blur-2xl" />
              <div className="relative w-full rounded-2xl border border-border/60 bg-surface-accent/40 p-8 shadow-divine-lg sm:p-10">
                <blockquote className="text-xl font-light leading-relaxed text-foreground-muted sm:text-2xl">
                 “The science of house-building has come down to us from the Ṛṣis who obtained it from Brahmā.”
                </blockquote>
                <div className="mt-6">
                    <div className="font-medium text-foreground italic">— Brihat Samhita</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

function FeatureRow({
  number,
  title,
  description,
}) {
  return (
    <div className="flex gap-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-medium text-primary">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-medium text-foreground">{title}</h3>
        <p className="mt-1 text-muted-foreground">{description}</p>
      </div>
    </div>
  )};
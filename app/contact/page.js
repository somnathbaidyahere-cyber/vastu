"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

/* -------------------------------------------------------------------------
 * Config — replace these with your real details
 * ---------------------------------------------------------------------- */

const WHATSAPP_NUMBER = "919000000000"; // country code + number, digits only
const EMAIL_ADDRESS = "hello@vastuveda.com";
const RESPONSE_TIME = "one working day";

const topics = [
  {
    id: "general",
    label: "General enquiry",
    prompt: "What would you like to ask?",
  },
  {
    id: "vastu",
    label: "Vastu question",
    prompt: "What would you like to know about Vastu?",
  },
  {
    id: "space",
    label: "Discuss a space",
    prompt: "Tell us a little about the space you have in mind.",
  },
  {
    id: "partnership",
    label: "Partnership or collaboration",
    prompt: "What do you have in mind?",
  },
  {
    id: "other",
    label: "Something else",
    prompt: "What would you like to discuss?",
  },
];

/* -------------------------------------------------------------------------
 * Page
 * ---------------------------------------------------------------------- */

export default function ContactPage() {
  const [topic, setTopic] = useState(null);
  const formRef = useRef(null);

  function chooseTopic(selected) {
    setTopic(selected);
    // Move focus and view to the form so the selection has an obvious result.
    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="min-h-screen bg-background">
      <nav aria-label="Breadcrumb" className="px-4 pt-7 sm:px-6 lg:px-8">
        <ol className="mx-auto flex max-w-5xl items-center gap-1.5 text-sm text-muted-foreground">
          <li>
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3.5 w-3.5 opacity-50" aria-hidden="true" />
          </li>
          <li aria-current="page" className="font-medium text-foreground">
            Contact
          </li>
        </ol>
      </nav>

      <Hero />
      <TopicSelection selected={topic} onSelect={chooseTopic} />
      <ContactForm ref={formRef} topic={topic} onTopicChange={setTopic} />
      <DirectContact />
      <ConsultationBridge />
      <ClosingStatement />
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 1 — Hero
 * ---------------------------------------------------------------------- */

function Hero() {
  return (
    <header className="px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pb-32 lg:pt-24">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Contact
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.08] text-foreground sm:text-5xl lg:text-6xl">
          Let&rsquo;s talk about your space.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Have a question about Vastu, our approach, or something
          you&rsquo;d like to discuss? We&rsquo;re here to listen.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            WhatsApp
          </a>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="transition-colors hover:text-primary"
          >
            Email
          </a>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <span>General enquiries</span>
        </div>

        <a
          href="#how-can-we-help"
          className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Start a conversation <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------
 * 2 — How can we help
 * ---------------------------------------------------------------------- */

function TopicSelection({ selected, onSelect }) {
  return (
    <section
      id="how-can-we-help"
      className="scroll-mt-24 border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
            How can we help?
          </h2>
          <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
            Choose what you&rsquo;d like to get in touch about.
          </p>
        </div>

        <div className="lg:col-span-8">
          <ul className="border-t border-border/60">
            {topics.map((item) => {
              const isSelected = selected?.id === item.id;
              return (
                <li key={item.id} className="border-b border-border/60">
                  <button
                    type="button"
                    onClick={() => onSelect(item)}
                    aria-pressed={isSelected}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left transition-colors sm:py-9"
                  >
                    <span
                      className={`text-xl font-medium transition-all duration-300 group-hover:translate-x-1.5 sm:text-2xl ${
                        isSelected ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {item.label}
                    </span>
                    <ArrowRight
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "translate-x-0 text-primary opacity-100"
                          : "-translate-x-2 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 3 — Contact form
 * ---------------------------------------------------------------------- */

function ContactForm({ ref, topic, onTopicChange }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function update(field) {
    return (event) =>
      setValues((current) => ({ ...current, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, topic: topic?.label ?? "Unspecified" }),
      });
      if (!response.ok) throw new Error("Request failed");
      setStatus("sent");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section
        ref={ref}
        className="scroll-mt-24 border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
      >
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
            Message sent.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Thank you for writing in. We usually respond within{" "}
            {RESPONSE_TIME}. If it&rsquo;s time-sensitive,{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              WhatsApp is usually quicker
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
          >
            Send another message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="scroll-mt-24 border-t border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
          Tell us a little more.
        </h2>

        {topic && (
          <p className="mt-5 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>You selected</span>
            <span className="font-medium text-foreground">{topic.label}</span>
            <button
              type="button"
              onClick={() => onTopicChange(null)}
              className="underline decoration-border underline-offset-4 transition-colors hover:text-primary hover:decoration-primary"
            >
              Change
            </button>
          </p>
        )}

        <form onSubmit={handleSubmit} className="mt-12 space-y-10">
          <Field
            id="name"
            label="Name"
            value={values.name}
            onChange={update("name")}
            required
          />
          <Field
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={update("email")}
            required
          />
          <Field
            id="phone"
            label="Phone or WhatsApp"
            type="tel"
            hint="Optional"
            value={values.phone}
            onChange={update("phone")}
          />
          <Field
            id="message"
            label={topic?.prompt ?? "What would you like to discuss?"}
            multiline
            value={values.message}
            onChange={update("message")}
            required
          />

          <div className="flex flex-wrap items-center justify-between gap-5 pt-2">
            {status === "error" ? (
              <p className="text-sm text-foreground">
                That didn&rsquo;t send. Try again, or email us at{" "}
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="text-primary underline underline-offset-4"
                >
                  {EMAIL_ADDRESS}
                </a>
                .
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                We usually respond within {RESPONSE_TIME}.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 disabled:opacity-60"
            >
              {status === "sending" ? "Sending" : "Send message"}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/** Underlined field, matching the page's thin-rule visual language. */
function Field({
  id,
  label,
  hint,
  type = "text",
  multiline = false,
  value,
  onChange,
  required = false,
}) {
  const shared =
    "mt-3 w-full border-0 border-b border-border bg-transparent px-0 pb-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-4 text-sm text-muted-foreground"
      >
        <span>{label}</span>
        {hint && <span className="text-xs">{hint}</span>}
      </label>
      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onChange={onChange}
          required={required}
          className={`${shared} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={shared}
        />
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------
 * 4 — Direct contact
 * ---------------------------------------------------------------------- */

function DirectContact() {
  return (
    <section className="border-t border-border/60 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-medium text-foreground sm:text-4xl">
          Prefer to reach us directly?
        </h2>

        <dl className="mt-12 grid gap-px border-t border-border/60 sm:grid-cols-3">
          <div className="py-8 sm:pr-8">
            <dt className="text-sm text-muted-foreground">WhatsApp</dt>
            <dd className="mt-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </dd>
          </div>

          <div className="border-border/60 py-8 sm:border-l sm:px-8">
            <dt className="text-sm text-muted-foreground">Email</dt>
            <dd className="mt-3">
              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="group inline-flex items-center gap-2 text-lg font-medium text-foreground transition-colors hover:text-primary"
              >
                {EMAIL_ADDRESS}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </dd>
          </div>

          <div className="border-border/60 py-8 sm:border-l sm:pl-8">
            <dt className="text-sm text-muted-foreground">Response</dt>
            <dd className="mt-3 text-lg text-foreground">
              We usually respond within {RESPONSE_TIME}.
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 5 — Consultation bridge
 * ---------------------------------------------------------------------- */

function ConsultationBridge() {
  return (
    <section className="border-t border-border/60 bg-secondary/25 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-medium text-foreground sm:text-3xl">
            Looking for a deeper conversation about your space?
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            If you&rsquo;re looking for guidance specific to your home,
            workplace or another space, a consultation may be a better
            place to begin.
          </p>
        </div>
        <div className="lg:col-span-4 lg:text-right">
          <Link
            href="/consultation"
            className="group inline-flex items-center gap-2 text-base font-medium text-foreground underline decoration-border underline-offset-[6px] transition-colors hover:text-primary hover:decoration-primary"
          >
            Book a consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------
 * 6 — Closing statement
 * ---------------------------------------------------------------------- */

function ClosingStatement() {
  return (
    <section className="relative overflow-hidden border-t border-border/60 px-4 py-28 sm:px-6 lg:px-8 lg:py-36">
      {/* One quiet architectural texture — replace with a real photograph
          (next/image, fill, object-cover, low opacity) when assets are ready. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 15%, hsl(var(--primary) / 0.10), transparent 55%), radial-gradient(circle at 80% 85%, hsl(var(--primary) / 0.08), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Every space has its own questions.
        </p>
        <p className="mx-auto mt-6 max-w-md leading-relaxed text-muted-foreground">
          If you have something you&rsquo;d like to ask, start with a
          conversation.
        </p>
        <a
          href="#how-can-we-help"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
        >
          Get in touch <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
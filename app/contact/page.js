"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChevronRight,
  MessageSquare,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  MessageCircle
} from "lucide-react";

import Hero from "@/components/pages/contact/Hero";

/* -------------------------------------------------------------------------
 * Config — replace these with your real details
 * ---------------------------------------------------------------------- */
const WHATSAPP_NUMBER = "919000000000"; // country code + number, digits only
const EMAIL_ADDRESS = "hello@vastuveda.com";
const PHONE_NUMBER = "+919000000000";
const RESPONSE_TIME = "24 hours";

const TOPICS = [
  {
    id: "general",
    label: "General enquiry",
    prompt: "What would you like to ask us?",
    subtext: "For quick questions, methodology details, or general guidance.",
  },
  {
    id: "vastu",
    label: "Vastu question",
    prompt: "What specific aspect of Vastu would you like to explore?",
    subtext:
      "Clarification on principles, directions, or orientation concepts.",
  },
  {
    id: "space",
    label: "Discuss a space",
    prompt: "Tell us a little about the space you have in mind.",
    subtext: "For prospective homes, commercial spaces, or renovation plans.",
  },
  {
    id: "partnership",
    label: "Partnership or collaboration",
    prompt: "How can we collaborate together?",
    subtext: "For architects, interior designers, and real estate advisors.",
  },
  {
    id: "other",
    label: "Something else",
    prompt: "What would you like to discuss with us?",
    subtext: "Anything else that doesn't fit the categories above.",
  },
];

export default function ContactPage() {
  const [topic, setTopic] = useState(null);
  const formRef = useRef(null);

  function chooseTopic(selected) {
    setTopic(selected);
    window.requestAnimationFrame(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20">
      {/* 1. Breadcrumb Navigation */}

      <Hero />

      <TopicSelection selected={topic} onSelect={chooseTopic} />

      <ContactFormSection
        ref={formRef}
        topic={topic}
        onTopicChange={setTopic}
      />

      <DirectContactGrid />

      <ConsultationBridge />

      <ClosingStatement />
    </div>
  );
}

// function Hero() {
//   return (
//     <header className="relative isolate px-4 pb-20 pt-7 sm:px-6 lg:px-8 lg:pb-28 min-h-180">
//       <div className="absolute inset-0 bg-linear-to-r -z-5 from-foreground/90 via-foreground/55 to-foreground/10" />

//       <nav aria-label="Breadcrumb" className="px-4 pb-10 sm:px-6 lg:px-8">
//         <ol className="mx-auto flex max-w-7xl items-center gap-1.5 text-sm text-muted-foreground">
//           <li>
//             <Link
//               href="/"
//               className="text-primary-foreground/80 hover:text-accent-muted transition-colors duration-200"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <ChevronRight
//               className="h-3 w-3 text-primary-foreground hover:text-accent-muted"
//               aria-hidden="true"
//             />
//           </li>
//           <li
//             aria-current="page"
//             className="font-medium text-primary-foreground hover:text-accent-muted"
//           >
//             Contact
//           </li>
//         </ol>
//       </nav>
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src="/contact/threshold.webp"
//           alt=""
//           fill
//           preload
//           fetchPriority="high"
//           sizes="100vw"
//           className="object-cover object-center opacity-90"
//         />
//       </div>

//       <div className="mx-auto max-w-7xl mt-5">
//         {/* Editorial Subtitle Badge */}
//          <span className="inline-flex items-center gap-2 rounded-full border border-border-muted bg-card/60 px-4 py-1.5 text-[10px] md:text-xs font-medium uppercase tracking-widest text-surface-muted mt-6">
//               <MessageCircle className="h-3.5 w-3.5" />
//               Start a Conversation
//             </span>

//         {/* Serif Headline */}
//         <h1 className="hero-heading text-surface">
//           Let&rsquo;s{" "}<span className="text-gradient-brand">talk</span> about your space.
//         </h1>

//         <p className="mt-6 hero-description text-surface max-w-2xl">
//           Have a question about Vastu, our analytical approach, or a specific
//           property you are evaluating? We are here to listen without judgment or
//           pre-packaged templates.
//         </p>

//         {/* Quick Contact Bar */}
//         <div className="mt-30 flex flex-wrap items-center gap-y-3 text-sm text-[#5C554E] pt-8">
//           <a
//             href={`https://wa.me/${WHATSAPP_NUMBER}`}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="inline-flex items-center space-x-2 text-secondary-hover hover:text-primary-foreground transition-colors group"
//           >
//             <MessageSquare className="w-4 h-4 text-accent group-hover:text-accent-muted" />
//             <span className="font-medium">WhatsApp direct</span>
//             <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
//           </a>

//           <span
//             className="h-3.5 w-px bg-[#E2DACC] mx-4 hidden sm:inline-block"
//             aria-hidden="true"
//           />

//           <a
//             href={`mailto:${EMAIL_ADDRESS}`}
//             className="inline-flex items-center space-x-2 text-secondary-hover hover:text-primary-foreground transition-colors group"
//           >
//             <Mail className="w-4 h-4 text-accent group-hover:text-accent-muted" />
//             <span className="font-medium">{EMAIL_ADDRESS}</span>
//           </a>

//           <span
//             className="h-3.5 w-px bg-[#E2DACC] mx-4 hidden sm:inline-block"
//             aria-hidden="true"
//           />

//           <div className="flex items-center space-x-2 text-secondary-hover hover:text-accent-muted">
//             <Clock className="w-4 h-4 text-accent group-hover:text-accent-muted" />
//             <span>Response within {RESPONSE_TIME}</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

function TopicSelection({ selected, onSelect }) {
  return (
    <section
      id="how-can-we-help"
      className="border-t border-border/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24 "
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column Description */}
        <div className="lg:col-span-4 space-y-4">
          <p className="section-badge">TOPIC OF INQUIRY</p>
          <h2 className="section-heading">How can we help you today?</h2>
          <p className="text-sm text-[#5C554E] leading-relaxed max-w-xs">
            Select a subject below to tailor your query. This helps us direct
            your question to the right space specialist immediately.
          </p>
        </div>

        {/* Right Column Interactive List */}
        <div className="lg:col-span-8">
          <ul className="border-t border-[#E2DACC] divide-y divide-[#E2DACC]">
            {TOPICS.map((item) => {
              const isSelected = selected?.id === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onSelect(item)}
                    aria-pressed={isSelected}
                    className={`group w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left transition-all duration-200 px-3 sm:px-4 rounded-sm ${
                      isSelected ? "bg-[#F4EFE6]" : "hover:bg-[#F7F2E9]"
                    }`}
                  >
                    <div className="space-y-1">
                      <div className="flex items-center space-x-3">
                        <span
                          className={`text-lg sm:text-xl font-serif font-medium transition-colors ${
                            isSelected
                              ? "text-[#8C6A3C]"
                              : "text-[#2C2825] group-hover:text-[#8C6A3C]"
                          }`}
                        >
                          {item.label}
                        </span>
                        {isSelected && (
                          <span className="inline-flex items-center text-[10px] uppercase font-mono tracking-widest bg-[#8C6A3C] text-[#FAF7F0] px-2 py-0.5 rounded-xs">
                            Selected
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-[#5C554E] font-light">
                        {item.subtext}
                      </p>
                    </div>

                    <div className="pt-1">
                      <div
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                          isSelected
                            ? "border-[#8C6A3C] bg-[#8C6A3C] text-[#FAF7F0]"
                            : "border-[#E2DACC] group-hover:border-[#8C6A3C] text-[#7A7268] group-hover:text-[#8C6A3C]"
                        }`}
                      >
                        <ArrowRight
                          className={`w-4 h-4 transition-transform duration-300 ${
                            isSelected
                              ? "translate-x-0"
                              : "-translate-x-1 group-hover:translate-x-0"
                          }`}
                        />
                      </div>
                    </div>
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

const ContactFormSection = React.forwardRef(function ContactFormSection(
  { topic, onTopicChange },
  ref,
) {
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
      // Simulate submission delay
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus("sent");
      setValues({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      ref={ref}
      className="scroll-mt-8 border-t border-border/70 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side Context Card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF7F0] border border-[#E2DACC] p-8 sm:p-10 rounded-sm shadow-xs space-y-6">
            <p className="section-badge">DIRECT WHATSAPP INITIATIVE</p>

            <h3 className="text-2xl font-serif text-[#2C2825]">
              Prefer instant dialogue?
            </h3>

            <p className="text-sm text-[#5C554E] leading-relaxed">
              Skip the web form entirely if you prefer. Start a chat with our
              consultation lead directly on WhatsApp for prompt, quiet
              responses.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full bg-[#8C6A3C] hover:bg-[#745228] text-[#FAF7F0] text-sm font-medium px-6 py-4 rounded-sm transition-colors duration-200 group shadow-xs"
            >
              <span className="flex items-center space-x-3">
                <MessageSquare className="w-4 h-4 text-[#FAF7F0]" />
                <span>Start WhatsApp Conversation</span>
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="pt-4 border-t border-[#E2DACC] flex items-start space-x-3 text-xs text-[#7A7268]">
              <CheckCircle2 className="w-4 h-4 text-[#8C6A3C] shrink-0 mt-0.5" />
              <span>
                No preliminary documents, floor plan uploads, or technical
                details required to start.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 bg-[#FAF7F0] border border-[#E2DACC] p-8 sm:p-12 rounded-sm shadow-xs">
          {status === "sent" ? (
            <div className="py-12 text-center space-y-6">
              <div className="w-12 h-12 bg-[#8C6A3C]/10 text-[#8C6A3C] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-serif text-[#2C2825]">
                Message received.
              </h3>
              <p className="text-sm text-[#5C554E] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to VastuVeda. Our lead practitioner
                will review your inquiry and respond within {RESPONSE_TIME}.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="inline-block pt-4 text-xs font-mono uppercase tracking-widest text-[#8C6A3C] underline underline-offset-4 hover:text-[#745228] transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-serif text-[#2C2825]">
                    Send a message
                  </h3>
                  <p className="text-xs text-[#7A7268] mt-1">
                    Fill out the brief details below.
                  </p>
                </div>

                {topic && (
                  <div className="flex items-center space-x-2 text-xs bg-[#F4EFE6] border border-[#E2DACC] px-3 py-1.5 rounded-sm">
                    <span className="text-[#7A7268]">Topic:</span>
                    <span className="font-medium text-[#8C6A3C]">
                      {topic.label}
                    </span>
                    <button
                      type="button"
                      onClick={() => onTopicChange(null)}
                      className="ml-1 text-[#7A7268] hover:text-[#2C2825] font-bold"
                      title="Clear topic"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <UnderlinedField
                  id="name"
                  label="Your Name"
                  value={values.name}
                  onChange={update("name")}
                  required
                />
                <UnderlinedField
                  id="email"
                  label="Email Address"
                  type="email"
                  value={values.email}
                  onChange={update("email")}
                  required
                />
                <UnderlinedField
                  id="phone"
                  label="Phone or WhatsApp Number"
                  type="tel"
                  hint="Optional"
                  value={values.phone}
                  onChange={update("phone")}
                />
                <UnderlinedField
                  id="message"
                  label={topic?.prompt ?? "What would you like to discuss?"}
                  multiline
                  value={values.message}
                  onChange={update("message")}
                  required
                />

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E2DACC]">
                  <span className="text-xs text-[#7A7268]">
                    We usually respond within {RESPONSE_TIME}.
                  </span>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center space-x-3 bg-[#2C2825] hover:bg-[#8C6A3C] text-[#FAF7F0] text-sm font-medium px-8 py-3.5 rounded-sm transition-colors duration-200 disabled:opacity-50"
                  >
                    <span>
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

function UnderlinedField({
  id,
  label,
  hint,
  type = "text",
  multiline = false,
  value,
  onChange,
  required = false,
}) {
  const inputStyles =
    "w-full border-0 border-b border-[#E2DACC] bg-transparent px-0 py-2 text-[#2C2825] text-base outline-none transition-colors duration-200 focus:border-[#8C6A3C] placeholder:text-[#B5ADA3]";

  return (
    <div className="space-y-1">
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={id}
          className="text-xs font-mono uppercase tracking-wider text-[#7A7268]"
        >
          {label} {required && <span className="text-[#8C6A3C]">*</span>}
        </label>
        {hint && (
          <span className="text-[11px] text-[#A39B90] italic">{hint}</span>
        )}
      </div>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          rows={3}
          value={value}
          onChange={onChange}
          required={required}
          className={`${inputStyles} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          required={required}
          className={inputStyles}
        />
      )}
    </div>
  );
}

function DirectContactGrid() {
  return (
    <section className="border-t border-border/70 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-10 sm:space-y-12">
        <div>
          <p className="section-badge">DIRECT CHANNELS</p>
          <h2 className="section-heading mt-2">Prefer to reach us directly?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#E2DACC] border-t border-b border-[#E2DACC]">
          {/* Channel 1 */}
          <div className="py-8 sm:py-10 sm:pr-8 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#7A7268]">
              <MessageSquare className="w-3.5 h-3.5 text-[#8C6A3C]" />
              <span>WhatsApp</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center space-x-2 text-lg font-serif font-medium text-[#2C2825] hover:text-[#8C6A3C] transition-colors"
            >
              <span>Start a conversation</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C6A3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-xs text-[#7A7268] leading-relaxed">
              Best for prompt, conversational inquiries and brief questions.
            </p>
          </div>

          {/* Channel 2 */}
          <div className="py-8 sm:py-10 sm:px-8 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#7A7268]">
              <Mail className="w-3.5 h-3.5 text-[#8C6A3C]" />
              <span>Email</span>
            </div>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="group inline-flex items-center space-x-2 text-lg font-serif font-medium text-[#2C2825] hover:text-[#8C6A3C] transition-colors"
            >
              <span>{EMAIL_ADDRESS}</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C6A3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-xs text-[#7A7268] leading-relaxed">
              Best for long-form thoughts, drawings, or architectural queries.
            </p>
          </div>

          {/* Channel 3 */}
          <div className="py-8 sm:py-10 sm:pl-8 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase text-[#7A7268]">
              <Phone className="w-3.5 h-3.5 text-[#8C6A3C]" />
              <span>Direct Phone</span>
            </div>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group inline-flex items-center space-x-2 text-lg font-serif font-medium text-[#2C2825] hover:text-[#8C6A3C] transition-colors"
            >
              <span>{PHONE_NUMBER}</span>
              <ArrowUpRight className="w-4 h-4 text-[#8C6A3C] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-xs text-[#7A7268] leading-relaxed">
              Mon–Fri, 10:00 AM to 6:00 PM IST.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConsultationBridge() {
  return (
    <section className="border-t border-border/70 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center space-x-2">
            <span className="section-badge ">
              DEEP-DIVE CONSULTATIONS
            </span>
          </div>
          <h2 className="section-heading">
            Looking for a structured reading of your space?
          </h2>
          <p className="section-description">
            If you are evaluating a specific floorplan, navigating a renovation,
            or seeking holistic alignment for your residence, explore our full
            consultation methodology.
          </p>
        </div>

        <Link
          href="/consultation"
          className="inline-flex items-center space-x-3 bg-primary text-primary-foreground hover:text-surface text-sm font-medium px-8 py-4 rounded-sm transition-colors duration-200 shrink-0 group shadow-divine"
        >
          <span>Explore Consultation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

function ClosingStatement() {
  return (
    <section className="relative isolate bg-primary-foreground px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contact/calm-courtyard.webp"
          alt=""
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div
          className="
        relative overflow-hidden rounded-4xl
        border border-white/35
        bg-primary/10
        px-6 py-12
        shadow-xl
        backdrop-blur-sm
        backdrop-saturate-120
        sm:px-10
        lg:px-12 lg:py-14
      "
        >
          {/* Decorative gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.917_0.032_82.8/0.12),transparent_100%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,oklch(0.644_0.111_55/0.12),transparent_100%)]" />

          {/* Content */}
          <div
            className="
          relative
          grid items-center
          gap-8
          lg:grid-cols-[1fr_auto]
          lg:gap-12
        "
          >
            {/* Left — Text */}
            <div className="text-left">
              <h2 className="cta-heading">
                “Every space has its own questions.”
              </h2>

              <p className=" cta-description">
                Whatever you are curious about, your questions can start
                anywhere. We are ready when you are.
              </p>
            </div>

            {/* Right — CTA */}
            <div className="flex lg:justify-end">
              <a
                href="#how-can-we-help"
                className="
              group
              inline-flex shrink-0 items-center gap-2
              rounded-full
              border border-primary-foreground/30
              px-7 py-3.5
              font-medium
              transition
              text-surface-accent
              hover:bg-primary-foreground/10
              hover:text-primary-foreground
            "
              >
                Select a topic to begin
                <ArrowRight className="h-4 w-4 transition-all duration-150 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

import { useContact } from "./ContactContext";

// Keep these in your existing constants/config file
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
const RESPONSE_TIME = "24–48 hours";

export default function ContactFormSection() {
  const {
    topic,
    clearTopic,
    formRef,
  } = useContact();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  // idle | sending | sent | error

  function update(field) {
    return (event) =>
      setValues((current) => ({
        ...current,
        [field]: event.target.value,
      }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    try {
      // Simulate submission delay
      await new Promise((resolve) =>
        setTimeout(resolve, 1200),
      );

      setStatus("sent");

      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      ref={formRef}
      className="scroll-mt-8 border-t border-border/70 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left Side Context Card */}
        <div className="space-y-6 lg:col-span-5">
          <div className="space-y-6 rounded-sm border border-[#E2DACC] bg-[#FAF7F0] p-8 shadow-xs sm:p-10">
            <p className="section-badge">
              DIRECT WHATSAPP INITIATIVE
            </p>

            <h3 className="font-serif text-2xl text-[#2C2825]">
              Prefer instant dialogue?
            </h3>

            <p className="text-sm leading-relaxed text-[#5C554E]">
              Skip the web form entirely if you prefer.
              Start a chat with our consultation lead
              directly on WhatsApp for prompt, quiet
              responses.
            </p>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-between rounded-sm bg-[#8C6A3C] px-6 py-4 text-sm font-medium text-[#FAF7F0] shadow-xs transition-colors duration-200 hover:bg-[#745228]"
            >
              <span className="flex items-center space-x-3">
                <MessageSquare className="h-4 w-4 text-[#FAF7F0]" />

                <span>
                  Start WhatsApp Conversation
                </span>
              </span>

              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="flex items-start space-x-3 border-t border-[#E2DACC] pt-4 text-xs text-[#7A7268]">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6A3C]" />

              <span>
                No preliminary documents, floor plan
                uploads, or technical details required to
                start.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="rounded-sm border border-[#E2DACC] bg-[#FAF7F0] p-8 shadow-xs sm:p-12 lg:col-span-7">
          {status === "sent" ? (
            <div className="space-y-6 py-12 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#8C6A3C]/10 text-[#8C6A3C]">
                <CheckCircle2 className="h-6 w-6" />
              </div>

              <h3 className="font-serif text-3xl text-[#2C2825]">
                Message received.
              </h3>

              <p className="mx-auto max-w-md text-sm leading-relaxed text-[#5C554E]">
                Thank you for reaching out to VastuVeda.
                Our lead practitioner will review your
                inquiry and respond within {RESPONSE_TIME}.
              </p>

              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="inline-block pt-4 font-mono text-xs uppercase tracking-widest text-[#8C6A3C] underline underline-offset-4 transition-colors hover:text-[#745228]"
              >
                Send another message
              </button>
            </div>
          ) : (
            <div>
              {/* Form Header */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl text-[#2C2825]">
                    Send a message
                  </h3>

                  <p className="mt-1 text-xs text-[#7A7268]">
                    Fill out the brief details below.
                  </p>
                </div>

                {topic && (
                  <div className="flex items-center space-x-2 rounded-sm border border-[#E2DACC] bg-[#F4EFE6] px-3 py-1.5 text-xs">
                    <span className="text-[#7A7268]">
                      Topic:
                    </span>

                    <span className="font-medium text-[#8C6A3C]">
                      {topic.label}
                    </span>

                    <button
                      type="button"
                      onClick={clearTopic}
                      className="ml-1 font-bold text-[#7A7268] hover:text-[#2C2825]"
                      title="Clear topic"
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="space-y-8"
              >
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
                  label={
                    topic?.prompt ??
                    "What would you like to discuss?"
                  }
                  multiline
                  value={values.message}
                  onChange={update("message")}
                  required
                />

                {/* Submit Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E2DACC] pt-4">
                  <span className="text-xs text-[#7A7268]">
                    We usually respond within {RESPONSE_TIME}.
                  </span>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center space-x-3 rounded-sm bg-[#2C2825] px-8 py-3.5 text-sm font-medium text-[#FAF7F0] transition-colors duration-200 hover:bg-[#8C6A3C] disabled:opacity-50"
                  >
                    <span>
                      {status === "sending"
                        ? "Sending..."
                        : "Send Message"}
                    </span>

                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

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
"use client";

import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";

import { useContact } from "./ContactContext";
import UnderlinedField from "@/components/ui/UnderLineField";
import {
  openWhatsApp,
  createContactWhatsAppMessage,
  sanitizeEmail,
  sanitizeIndianMobile,
} from "@/lib/whatsapp";

// Keep these in your existing constants/config file
const WHATSAPP_NUMBER = "YOUR_WHATSAPP_NUMBER";
const RESPONSE_TIME = "24–48 hours";

export default function ContactFormSection() {
  const { topic, clearTopic, formRef } = useContact();

  const [status, setStatus]=("")

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

const [errors, setErrors] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
  general: "",
});

const hasErrors = Object.values(errors).some(Boolean);

 const update = (field) => (eventOrValue) => {
  const value =
    typeof eventOrValue === "string"
      ? eventOrValue
      : eventOrValue.target.value;

  setValues((previousValues) => ({
    ...previousValues,
    [field]: value,
  }));

  setErrors((previousErrors) => ({
    ...previousErrors,
    [field]: "",
    general: "",
  }));
};

const validateField = (field, value) => {
  let error = "";

  switch (field) {
    case "name":
      if (!value.trim()) {
        error = "Please enter your name.";
      }
      break;

    case "email": {
      const result = sanitizeEmail(value);
      error = result.error;
      break;
    }

    case "phone": {
      // Phone is optional.
      if (value.trim()) {
        const result = sanitizeIndianMobile(value);
        error = result.error;
      }
      break;
    }

    case "message":
      if (!value.trim()) {
        error = "Please enter your message.";
      }
      break;

    default:
      break;
  }

  setErrors((previousErrors) => ({
    ...previousErrors,
    [field]: error,
  }));

  return !error;
};

const handleWhatsAppSubmit = (event) => {
  event.preventDefault();

  const newErrors = {
    name: "",
    email: "",
    phone: "",
    message: "",
    general: "",
  };

  let isValid = true;

  // Name validation
  if (!values.name.trim()) {
    newErrors.name = "Please enter your name.";
    isValid = false;
  }

  // Email validation
 const emailResult = sanitizeEmail(values.email);

  if (emailResult.error) {
    newErrors.email = emailResult.error;
    isValid = false;
  }

  // Phone validation (optional)
  let sanitizedPhone = "";

  if (values.phone.trim()) {
    const phoneResult = sanitizeIndianMobile(values.phone);

    if (phoneResult.error) {
      newErrors.phone = phoneResult.error;
      isValid = false;
    } else {
      sanitizedPhone = phoneResult.value;
    }
  }

  // Message validation
  if (!values.message.trim()) {
    newErrors.message = "Please enter your message.";
    isValid = false;
  }

  setErrors(newErrors);

  // Stop if any field is invalid
  if (!isValid) {
    return;
  }

  try {
    const whatsappMessage = createContactWhatsAppMessage({
      name: values.name.trim(),
      email: emailResult.value,
      phone: sanitizedPhone,
      message: values.message.trim(),
    });

    openWhatsApp(whatsappMessage);
  } catch (error) {
    setErrors((previousErrors) => ({
      ...previousErrors,
      general: error.message,
    }));
  }
};

  return (
   <section
  ref={formRef}
  className="scroll-mt-8 border-t border-border/70 bg-surface px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
>
  <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
    {/* Left Side Context Card */}
    <div className="space-y-6 lg:col-span-5">
      <div className="space-y-6 rounded-sm border border-[#E2DACC] bg-[#FAF7F0] p-8 shadow-xs sm:p-10">
        <p className="section-badge">DIRECT WHATSAPP INITIATIVE</p>

        <h3 className="font-serif text-2xl text-[#2C2825]">
          Prefer instant dialogue?
        </h3>

        <p className="text-sm leading-relaxed text-[#5C554E]">
          Skip the web form entirely if you prefer. Start a chat with our
          consultation lead directly on WhatsApp for prompt, quiet
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
            <span>Start WhatsApp Conversation</span>
          </span>

          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="flex items-start space-x-3 border-t border-[#E2DACC] pt-4 text-xs text-[#7A7268]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#8C6A3C]" />

          <span>
            No preliminary documents, floor plan uploads, or technical
            details required to start.
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
            Thank you for reaching out to VastuVeda. Our lead practitioner
            will review your inquiry and respond within {RESPONSE_TIME}.
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
                <span className="text-[#7A7268]">Topic:</span>

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
            onSubmit={handleWhatsAppSubmit}
            noValidate
            className="space-y-8"
          >
            {/* Name */}
            <UnderlinedField
              id="name"
              label="Your Name"
              value={values.name}
              onChange={update("name")}
              onBlur={() => validateField("name", values.name)}
              error={errors.name}
              required
            />

            {/* Email */}
            <UnderlinedField
              id="email"
              label="Email Address"
              type="email"
              value={values.email}
              onChange={update("email")}
              onBlur={() => validateField("email", values.email)}
              error={errors.email}
              required
            />

            {/* Phone */}
            <UnderlinedField
              id="phone"
              label="Phone or WhatsApp Number"
              type="tel"
              hint="Optional"
              value={values.phone}
              onChange={update("phone")}
              onBlur={() => validateField("phone", values.phone)}
              error={errors.phone}
            />

            {/* Message */}
            <UnderlinedField
              id="message"
              label={topic?.prompt ?? "What would you like to discuss?"}
              multiline
              value={values.message}
              onChange={update("message")}
              onBlur={() => validateField("message", values.message)}
              error={errors.message}
              required
            />

            {/* General Error */}
            {errors.general && (
              <p className="text-sm text-red-600" role="alert">
                {errors.general}
              </p>
            )}

            {/* Submit Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#E2DACC] pt-4">
              <span className="text-xs text-[#7A7268]">
                We usually respond within {RESPONSE_TIME}.
              </span>

              <button
                type="submit"
                 disabled={status === "sending" || hasErrors}
                className="inline-flex items-center space-x-3 rounded-sm bg-[#2C2825] px-8 py-3.5 text-sm font-medium text-[#FAF7F0] transition-colors duration-200 hover:bg-[#8C6A3C] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>
                  {status === "sending" ? "Opening..." : "Send Message"}
                </span>

                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  </div>
</section>
  );
}


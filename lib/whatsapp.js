const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP;

/**
 * Validates and sanitizes an Indian mobile number.
 *
 * Returns a normalized number without formatting:
 * 919876543210
 */
export function sanitizeIndianMobile(phone) {
  if (!phone || typeof phone !== "string") {
    return {
      value: "",
      error: "Please enter your mobile number.",
    };
  }

  let cleanedPhone = phone.replace(/\D/g, "");

  // Remove +91 or 91 country code.
  if (cleanedPhone.startsWith("91") && cleanedPhone.length === 12) {
    cleanedPhone = cleanedPhone.slice(2);
  }

  // Remove leading zero.
  if (cleanedPhone.startsWith("0") && cleanedPhone.length === 11) {
    cleanedPhone = cleanedPhone.slice(1);
  }

  const indianMobileRegex = /^[6-9]\d{9}$/;

  if (!indianMobileRegex.test(cleanedPhone)) {
    return {
      value: "",
      error: "Please enter a valid 10-digit Indian mobile number.",
    };
  }

  return {
    value: `91${cleanedPhone}`,
    error: "",
  };
}

/**
 * Validates and sanitizes an email address.
 */
export function sanitizeEmail(email) {
  if (!email || typeof email !== "string") {
    return {
      value: "",
      error: "Please enter your email address.",
    };
  }

  const cleanedEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!emailRegex.test(cleanedEmail)) {
    return {
      value: "",
      error: "Please enter a valid email address.",
    };
  }

  return {
    value: cleanedEmail,
    error: "",
  };
}

/**
 * Creates a structured WhatsApp contact message.
 */
export function createContactWhatsAppMessage({
  name = "",
  email = "",
  phone = "",
  message = "",
} = {}) {
  const cleanedName = name.trim();
  const cleanedMessage = message.trim();

  if (!cleanedName) {
    throw new Error("Please enter your name.");
  }

  if (!cleanedMessage) {
    throw new Error("Please enter your message.");
  }

  return `
Namaste VastuVeda Team,

I would like to make an enquiry through your website.

━━━━━━━━━━━━━━━━━━
CONTACT DETAILS
━━━━━━━━━━━━━━━━━━

Name: ${cleanedName}
Email: ${email}
Phone: ${phone || "Not provided"}

━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━

${cleanedMessage}

Thank you.
I look forward to hearing from you.
  `.trim();
}

/**
 * Opens WhatsApp with a prefilled message.
 */
export function openWhatsApp(message) {
  if (!message?.trim()) {
    throw new Error("WhatsApp message cannot be empty.");
  }

  if (!WHATSAPP_NUMBER) {
    throw new Error("WhatsApp number is not configured.");
  }

  const encodedMessage = encodeURIComponent(message.trim());

  const whatsappUrl =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
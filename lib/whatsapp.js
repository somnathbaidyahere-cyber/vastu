const WHATSAPP_NUMBER = process.NEXT_PUBLIC_WHATSAPP;


export function openWhatsApp(message) {
 console.log(WHATSAPP_NUMBER);

  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
import {
  MessageSquare,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "919000000000";
const EMAIL_ADDRESS = "hello@vastuveda.com";
const PHONE_NUMBER = "+919000000000";

export default function DirectContactGrid() {
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
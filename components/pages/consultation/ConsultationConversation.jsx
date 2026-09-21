import React from 'react';
import { MessageCircle, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function ConsultationConversation() {
  // Replace with actual contact details
  const whatsappNumber = "1234567890";
  const phoneNumber = "+1234567890";
  const emailAddress = "contact@vastuveda.com";
  const whatsappMessage = encodeURIComponent("Hello, I would like to inquire about a Vastu consultation for my space.");

  return (
    <section className="bg-surface py-24 md:py-36 px-6 md:px-12 border-t border-stone-200/60 font-serif">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Philosophical Framing */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8 md:space-y-12">
            <div>
              {/* Section Tag */}
              <span className="section-badge">
                Start a Conversation
              </span>
              
              {/* Main Heading */}
              <h2 className="section-heading">
                Have a space in mind?
              </h2>

              {/* Supporting Text */}
              <p className="section-description">
                Every environment carries its own subtle energy and orientation. Whether you are building, renovating, or simply adjusting an existing home, we are here to explore possibilities together.
              </p>
            </div>

            {/* Integrated Closing Statement */}
            <div className="pt-8 border-t border-stone-200/60">
              <p className="text-xl sm:text-2xl text-stone-800 font-light italic leading-snug">
                “Your space is unique. Your questions can start anywhere.”
              </p>
            </div>
          </div>

          {/* Right Column: Direct Contact & Next Steps */}
          <div className="lg:col-span-6 flex flex-col justify-between pt-2 lg:pt-0">
            <div className="space-y-10">
              {/* Short Intro */}
              <p className="font-sans text-stone-600 text-base sm:text-lg leading-relaxed font-light">
                We believe in thoughtful dialogue over automated forms. Reach out directly to begin discussing your project at your own pace.
              </p>

              {/* Primary CTA: WhatsApp */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-between w-full sm:w-auto min-w-[280px] px-8 py-4 bg-stone-900 text-stone-100 font-sans text-sm tracking-wider uppercase transition-all duration-300 ease-out hover:bg-stone-800 border border-stone-900 rounded-2xl"
                >
                  <button className="flex items-center gap-3 ">
                    <MessageCircle className="w-4 h-4 text-stone-300 group-hover:text-green-500  transition-colors" />
                    Start a Conversation
                  </button>
                  <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </a>
              </div>

              {/* Secondary Contact Links */}
              <div className="pt-6 border-t border-stone-200/60 font-sans text-sm">
                <p className="text-xs uppercase tracking-widest text-stone-400 mb-4 font-medium">Alternative Contact</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10 text-stone-700">
                  <a 
                    href={`tel:${phoneNumber}`} 
                    className="inline-flex items-center gap-2.5 hover:text-stone-900 transition-colors group py-1"
                  >
                    <Phone className="w-4 h-4 text-stone-400 group-hover:text-stone-800 transition-colors" />
                    <span>Call us</span>
                  </a>

                  <span className="hidden sm:inline text-stone-300">|</span>

                  <a 
                    href={`mailto:${emailAddress}`} 
                    className="inline-flex items-center gap-2.5 hover:text-stone-900 transition-colors group py-1"
                  >
                    <Mail className="w-4 h-4 text-stone-400 group-hover:text-stone-800 transition-colors" />
                    <span>Send an email</span>
                  </a>
                </div>
              </div>

              {/* Reassurance Message */}
              <div className="pt-4">
                <p className="font-sans text-xs tracking-wide text-stone-500 font-light italic">
                  * No detailed documents or floor plans are required to get started.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
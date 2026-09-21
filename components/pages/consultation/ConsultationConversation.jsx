'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, MessageSquare, Phone, Mail, CheckCircle2 } from 'lucide-react';

export default function ConsultationConversation() {
  // Replace these with your actual contact details
  const whatsappNumber = "1234567890";
  const phoneNumber = "+1234567890";
  const emailAddress = "hello@vastuguru.com";

  return (
    <section className="w-full bg-surface text-[#2C2825] py-20 lg:py-32 px-6 sm:px-12 md:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Hairline Divider */}
        <div className="w-full h-[1px] bg-[#E2DACC] mb-16 lg:mb-24" />

        {/* Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <span className="section-badge">
              START A CONVERSATION
            </span>

            <h2 className="section-heading">
              Want to understand your home better ?
            </h2>

            <p className="text-base sm:text-lg text-[#5C554E] font-sans leading-relaxed max-w-lg">
              Whether you are evaluating a prospective property, planning a subtle renovation, or simply seeking clarity on your current living space, we are here to help you navigate it.
            </p>

            {/* Subtle Accent Divider */}
            <div className="w-16 h-[1px] bg-[#8C6A3C]/40 my-2" />

            {/* Integrated Closing Statement */}
            <p className="text-lg sm:text-xl font-serif text-[#745228] italic leading-snug pt-2">
              “Your space is unique. Your questions can start anywhere.”
            </p>
          </div>

          {/* Right Column: CTAs & Direct Contact */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-[#FFFDFA] border border-[#E2DACC] p-8 sm:p-10 md:p-12 rounded-sm shadow-sm">
            <div className="space-y-8">
              
              <p className="text-base text-[#5C554E] leading-relaxed">
                Reach out directly via your preferred channel. We operate with a direct, conversational approach without lengthy intake questionnaires.
              </p>

              {/* Primary WhatsApp CTA */}
              <div>
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full bg-[#8C6A3C] hover:bg-[#745228] text-[#FAF7F0] font-sans text-base px-6 py-4 rounded-sm transition-all duration-200 group shadow-sm"
                >
                  <span className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-[#FAF7F0]/90" />
                    <span className="font-medium tracking-wide">Start a Conversation</span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* Secondary Links (Phone & Email) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#E2DACC]">
                <Link
                  href={`tel:${phoneNumber}`}
                  className="flex items-center space-x-3 text-sm text-[#5C554E] hover:text-[#8C6A3C] transition-colors duration-150 py-2 group"
                >
                  <Phone className="w-4 h-4 text-[#8C6A3C] group-hover:scale-105 transition-transform" />
                  <span className="underline underline-offset-4 decoration-[#E2DACC] group-hover:decoration-[#8C6A3C]">
                    Call us
                  </span>
                </Link>

                <Link
                  href={`mailto:${emailAddress}`}
                  className="flex items-center space-x-3 text-sm text-[#5C554E] hover:text-[#8C6A3C] transition-colors duration-150 py-2 group"
                >
                  <Mail className="w-4 h-4 text-[#8C6A3C] group-hover:scale-105 transition-transform" />
                  <span className="underline underline-offset-4 decoration-[#E2DACC] group-hover:decoration-[#8C6A3C]">
                    Send an email
                  </span>
                </Link>
              </div>

              {/* Reassurance Note */}
              <div className="flex items-start space-x-3 pt-4 border-t border-[#E2DACC]/60 text-xs sm:text-sm text-[#7A7268]">
                <CheckCircle2 className="w-4 h-4 text-[#8C6A3C] shrink-0 mt-0.5" />
                <span>No detailed documents, floor plans, or file uploads are required to get started.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
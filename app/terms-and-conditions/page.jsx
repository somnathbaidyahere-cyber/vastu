import React from "react";

export const metadata = {
  title: "Terms & Conditions | VastuGuru",
  description:
    "Review the terms governing the use of VastuGuru services, tools, and content.",
};

const emailAddress = process.env.NEXT_PUBLIC_EMAIL;
const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function TermsAndConditionsPage() {
  const sections = [
    { id: "intro", title: "1. Introduction" },
    { id: "about", title: "2. About VastuGuru" },
    { id: "educational-content", title: "3. Educational Content" },
    { id: "vastu-tools", title: "4. Vastu Tools" },
    { id: "enquiries", title: "5. Consultation Enquiries" },
    { id: "consultation-services", title: "6. Consultation Services" },
    { id: "no-outcomes", title: "7. No Guaranteed Outcomes" },
    { id: "intellectual-property", title: "8. Intellectual Property" },
    { id: "acceptable-use", title: "9. Acceptable Use" },
    { id: "third-parties", title: "10. Third-Party Links" },
    { id: "availability", title: "11. Website Availability" },
    { id: "limitations", title: "12. Disclaimers & Limitations" },
    { id: "governing-law", title: "13. Governing Law" },
    { id: "contact", title: "14. Contact Us" },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800">
      {/* Header Banner */}
      <div className=" bg-surface py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="hero-heading">Terms & Conditions</h1>
          <p className="mt-3 text-sm text-stone-600">
            Last updated:{" "}
            <span className="font-medium text-stone-900">25.09.2026</span>
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Sticky Navigation */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 space-y-2 text-sm  pl-4">
              <p className="font-semibold text-stone-900 mb-3">On this page</p>
              {sections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-stone-600 hover:text-amber-800 transition-colors py-1"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </aside>

          {/* Terms Content */}
          <main className="lg:col-span-3 space-y-10 leading-relaxed text-stone-700">
            {/* Disclaimer Callout Box */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6 text-sm text-stone-800 space-y-2">
              <p className="font-bold text-amber-900">Important Disclaimer</p>
              <p>
                VastuGuru provides educational information and traditional Vastu
                principles. Our educational content, guidance, and tools are not
                substitutes for professional architectural, legal, financial,
                structural, or medical advice.
              </p>
            </div>

            {/* Section 1 */}
            <section id="intro" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                1. Introduction
              </h2>
              <p>
                Welcome to <strong>VastuGuru</strong>.
              </p>
              <p>
                These Terms & Conditions govern your use of the VastuGuru
                website and its available features. By accessing or using the
                website, you agree to comply with these Terms. If you do not
                agree, please discontinue your use of the website.
              </p>
            </section>

            {/* Section 2 */}
            <section id="about" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                2. About VastuGuru
              </h2>
              <p>
                VastuGuru aims to promote awareness and thoughtful understanding
                of Vastu Shastra and space harmony. Our goal is to encourage
                positive learning without causing anxiety or undue pressure.
              </p>
            </section>

            {/* Section 3 */}
            <section id="educational-content" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                3. Educational Content
              </h2>
              <p>
                Content published across our articles, tools, and guides is
                provided for general educational purposes. Vastu Shastra
                interpretations may vary among different schools of thought; our
                content reflects VastuGuru’s specific framework and should not
                automatically be treated as universally established scientific
                facts.
              </p>
            </section>

            {/* Section 4 */}
            <section id="vastu-tools" className="scroll-mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-stone-900">
                4. Vastu Tools
              </h2>
              <p>We offer digital learning tools including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>4.1 Compass:</strong> Helps explore north orientation.
                  Accuracy relies on device sensors, hardware, and environmental
                  factors. Important measurements should be verified
                  independently.
                </li>
                <li>
                  <strong>4.2 VastuMap:</strong> Explores space planning
                  concepts. Suggestions are illustrative and not guaranteed
                  universal solutions for all layouts.
                </li>
                <li>
                  <strong>4.3 Mandala:</strong> Illustrates traditional energy
                  associations for directional zones.
                </li>
                <li>
                  <strong>4.4 Limitations:</strong> Digital tools are not
                  replacements for physical inspections, engineering
                  assessments, or architectural blueprints.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section id="enquiries" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                5. Consultation Enquiries
              </h2>
              <p>
                <strong>5.1 No Automatic Confirmation:</strong> Submitting a
                contact form, clicking CTAs, or reaching out on WhatsApp does
                not constitute a confirmed appointment until explicit terms and
                schedules are agreed upon.
              </p>
              <p>
                <strong>5.2 User Responsibility:</strong> Please ensure the
                details provided are accurate. Do not send confidential personal
                identity documents unless explicitly requested.
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="consultation-services"
              className="scroll-mt-8 space-y-3"
            >
              <h2 className="text-2xl font-semibold text-stone-900">
                6. Consultation Services
              </h2>
              <p>
                Scope, pricing, and timing for paid consultation services will
                be detailed and communicated prior to confirmation. Specific
                policies regarding cancellations or refunds apply as agreed
                during service setup.
              </p>
            </section>

            {/* Section 7 */}
            <section id="no-outcomes" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                7. No Guaranteed Outcomes
              </h2>
              <p>
                Vastu principles are holistic guidance. VastuGuru does{" "}
                <strong>not</strong> promise or guarantee specific financial
                wealth, medical health outcomes, guaranteed business success, or
                immediate elimination of misfortune.
              </p>
            </section>

            {/* Section 8 */}
            <section
              id="intellectual-property"
              className="scroll-mt-8 space-y-3"
            >
              <h2 className="text-2xl font-semibold text-stone-900">
                8. Intellectual Property
              </h2>
              <p>
                All original content, visual design elements, branding,
                illustrations, and software interfaces are protected property
                owned by or licensed to VastuGuru. Unauthorized reproduction or
                commercial redistribution is strictly prohibited.
              </p>
            </section>

            {/* Section 9 */}
            <section id="acceptable-use" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                9. Acceptable Use
              </h2>
              <p>
                Users agree not to attempt unauthorized system access, disrupt
                site availability, submit fraudulent messages, or misuse site
                resources.
              </p>
            </section>

            {/* Section 10 */}
            <section id="third-parties" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                10. Third-Party Links and Services
              </h2>
              <p>
                We are not responsible for the independent policies,
                availability, or operations of third-party platforms like
                WhatsApp or external tools.
              </p>
            </section>

            {/* Section 11 */}
            <section id="availability" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                11. Website Availability and Changes
              </h2>
              <p>
                We strive to keep our platform running reliably, but do not
                guarantee uninterrupted operational availability. Features may
                be updated, modified, or retired at any time.
              </p>
            </section>

            {/* Section 12 */}
            <section id="limitations" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                12. Limitations and Disclaimers
              </h2>
              <p>
                To the maximum extent permitted by law, VastuGuru disclaims
                liability for inaccuracies or outdated information. Users apply
                Vastu advice based on their personal discretion.
              </p>
            </section>

            {/* Section 13 */}
            <section id="governing-law" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">
                13. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms shall be governed and interpreted in accordance with
                the laws of <strong>[Insert Confirmed Jurisdiction]</strong>.
              </p>
            </section>

            {/* Section 14 */}
            <section
              id="contact"
              className="scroll-mt-8 border-t border-stone-200 pt-8 space-y-3"
            >
              <h2 className="text-2xl font-semibold text-stone-900">
                14. Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms & Conditions,
                please contact us:
              </p>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200 text-sm space-y-1">
                <p>
                  <strong>VastuGuru</strong>
                </p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${emailAddress}`}
                    className="text-amber-800 underline"
                  >
                    {emailAddress}
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href={`${websiteUrl}`}
                    className="text-amber-800 underline"
                  >
                    {websiteUrl}
                  </a>
                </p>
                {/* <p>Address: [Insert Business Address, if applicable]</p> */}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

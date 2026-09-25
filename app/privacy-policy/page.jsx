import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | VastuGuru',
  description: 'Understand how VastuGuru collects, uses, and protects your information.',
};

  
const emailAddress = process.env.NEXT_PUBLIC_EMAIL;
const websiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export default function PrivacyPolicyPage() {
  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-collected', title: '2. Information We Collect' },
    { id: 'how-we-use-information', title: '3. How We Use Your Information' },
    { id: 'contact-form-whatsapp', title: '4. Contact Form & WhatsApp' },
    { id: 'tools-content', title: '5. Educational Content & Tools' },
    { id: 'cookies', title: '6. Cookies & Tracking' },
    { id: 'sharing', title: '7. Sharing of Information' },
    { id: 'retention', title: '8. Data Retention' },
    { id: 'security', title: '9. Data Security' },
    { id: 'rights', title: '10. Your Privacy Rights' },
    { id: 'third-parties', title: '11. Third-Party Links' },
    { id: 'children', title: '12. Children’s Privacy' },
    { id: 'changes', title: '13. Policy Updates' },
    { id: 'contact', title: '14. Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-stone-800">
      {/* Header Banner */}
      <div className="bg-surface py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h1 className="hero-heading">Privacy Policy</h1>
          <p className="mt-3 text-sm text-stone-600">
            Last updated:  <span className="font-medium text-stone-900">25.09.2026</span> | Effective: <span className="font-medium text-stone-900">25.09.2026</span>
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          
          {/* Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 space-y-2 text-sm pl-4">
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

          {/* Policy Main Content */}
          <main className="lg:col-span-3 space-y-10 leading-relaxed text-stone-700">
            
            {/* Quick Summary Callout */}
            <div className="rounded-xl border border-amber-200 bg-amber-50/30 p-6 text-sm text-stone-800">
              <p className="font-semibold text-amber-900 mb-1">Quick Summary</p>
              VastuGuru collects basic details like your name, email, and message when you contact us. We do not maintain a permanent database of contact enquiries on our server; communications are handled via direct channels like WhatsApp, Phone, or Email.
            </div>

            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">1. Introduction</h2>
              <p>Welcome to <strong>VastuGuru</strong>.</p>
              <p>
                VastuGuru is an educational platform designed to help individuals explore Vastu Shastra, its traditional principles, the relationship between spaces and their occupants, and ways of understanding the orientation and arrangement of spaces.
              </p>
              <p>
                Our website provides educational articles, blogs, informational tools, and ways to contact us regarding Vastu-related consultations.
              </p>
              <p>
                We respect your privacy and aim to be transparent about the information you may share with us when you use our website or contact us.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collected" className="scroll-mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-stone-900">2. Information We Collect</h2>
              <p>We aim to collect only the information reasonably needed for the purposes described in this Policy.</p>
              
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-stone-800">2.1 Information You Provide Through Our Contact Form</h3>
                <p>When you use our contact form to send a message, you may be asked to provide:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>Name</strong> — required.</li>
                  <li><strong>Email address</strong> — required.</li>
                  <li><strong>Message or discussion topic</strong> — required.</li>
                  <li><strong>Phone or WhatsApp number</strong> — optional.</li>
                </ul>
                <p className="text-sm text-stone-600">
                  Note: We do not request floor plans, property documents, or file uploads through the standard contact form.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-semibold text-stone-800">2.2 Information Provided via Direct Communication</h3>
                <p>You may choose to contact VastuGuru directly through WhatsApp, phone calls, or email. The details you share depend entirely on what you voluntarily provide to assist your enquiry.</p>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-semibold text-stone-800">2.3 Information Collected Automatically</h3>
                <p>
                  When visiting our site, technical details such as your IP address, browser information, device specifications, and basic technical logs may be processed for website operational and security purposes.
                </p>
              </div>
            </section>

            {/* Section 3 */}
            <section id="how-we-use-information" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">3. How We Use Your Information</h2>
              <p>Information provided to VastuGuru may be used to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Understand and respond to your questions or enquiries.</li>
                <li>Communicate with you regarding requested consultations or guidance.</li>
                <li>Maintain and improve website functionality and educational resources.</li>
                <li>Protect against security threats or technical errors.</li>
                <li>Comply with applicable legal requirements.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="contact-form-whatsapp" className="scroll-mt-8 space-y-4">
              <h2 className="text-2xl font-semibold text-stone-900">4. Contact Form and WhatsApp Communication</h2>
              <p>
                Submitting our contact form may initiate a communication flow transmitted through third-party platforms like WhatsApp or direct email routing.
              </p>
              <p>
                <strong>Database Retention:</strong> VastuGuru does not maintain its own database for retaining submitted contact form enquiries. Transmitted messages exist within standard communication provider accounts (such as WhatsApp or email inboxes) as part of ordinary correspondence.
              </p>
            </section>

            {/* Section 5 */}
            <section id="tools-content" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">5. Educational Content and Website Tools</h2>
              <p>
                We offer digital tools including the <strong>Compass</strong>, <strong>VastuMap</strong>, and <strong>Mandala</strong> features. These tools operate for educational and informational purposes to help users visualize directions, zones, and spatial concepts.
              </p>
            </section>

            {/* Section 6 */}
            <section id="cookies" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">6. Cookies and Similar Technologies</h2>
              <p>
                VastuGuru may use cookies or essential technologies required for website operations, performance, and security.
              </p>
            </section>

            {/* Section 7 */}
            <section id="sharing" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">7. Sharing of Information</h2>
              <p>
                We do not sell your personal information. Information is only shared with third-party infrastructure providers necessary to run the site (e.g., hosting services, communication APIs, and email servers).
              </p>
            </section>

            {/* Section 8 */}
            <section id="retention" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">8. Data Retention</h2>
              <p>
                Records of conversations maintained through third-party channels (WhatsApp, phone, email) persist in accordance with those provider&apos; standard practices and regulatory legal requirements.
              </p>
            </section>

            {/* Section 9 */}
            <section id="security" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">9. Data Security</h2>
              <p>
                We implement reasonable security practices to protect data under our control. However, no internet transmission method can be guaranteed 100% secure.
              </p>
            </section>

            {/* Section 10 */}
            <section id="rights" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">10. Your Privacy Choices and Rights</h2>
              <p>
                Depending on your location, you may have rights to access, update, or request deletion of personal information shared with us. Reach out via email to initiate a privacy enquiry.
              </p>
            </section>

            {/* Section 11 */}
            <section id="third-parties" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">11. Third-Party Websites and Services</h2>
              <p>
                Our site contains links to third-party services (e.g., WhatsApp). Their practices are governed by their respective privacy policies.
              </p>
            </section>

            {/* Section 12 */}
            <section id="children" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">12. Children&apos;s Privacy</h2>
              <p>
                Our services are intended for a general audience. We do not knowingly collect information from children.
              </p>
            </section>

            {/* Section 13 */}
            <section id="changes" className="scroll-mt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">13. Changes to This Privacy Policy</h2>
              <p>
                Updates will be posted directly to this page along with a revised &quot;Last updated&quot; date.
              </p>
            </section>

            {/* Section 14 */}
            <section id="contact" className="scroll-mt-8 border-t border-stone-200 pt-8 space-y-3">
              <h2 className="text-2xl font-semibold text-stone-900">14. Contact Us</h2>
              <p>For questions or privacy inquiries, please reach out to us:</p>
              <div className="bg-stone-50 rounded-lg p-4 border border-stone-200 text-sm space-y-1">
                <p><strong>VastuGuru</strong></p>
                <p>Email: <a href={`mailto:${emailAddress}`} className="text-amber-800 underline">{emailAddress}</a></p>
                <p>Website: <a href={`${websiteUrl}`} className="text-amber-800 underline">{websiteUrl}</a></p>
                {/* <p>Address: [Insert Business Address, if applicable]</p> */}
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
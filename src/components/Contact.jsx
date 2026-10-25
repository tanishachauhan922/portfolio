import React, { useState } from 'react';
import { Mail, Linkedin, Copy, Check, Send, ExternalLink, Info, Sparkles, MapPin } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Generate mailto link with encoded parameters
    const subjectEncoded = encodeURIComponent(
      formState.subject || `Message from ${formState.name} via Portfolio`
    );
    const bodyEncoded = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-neutral-50/50 border-b border-neutral-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-900"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
            Let's Connect
          </h2>
          <p className="mt-3 text-neutral-600 text-base sm:text-lg">
            I am currently open to internship opportunities, software collaborations, and developer discussions.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200/70">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">Email Address</h3>
                  <p className="text-xs text-neutral-500">Direct inquiries & opportunities</p>
                </div>
              </div>

              <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/80 mb-3 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-800 truncate mr-2 select-all">
                  {contactInfo.email}
                </span>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-white hover:bg-neutral-100 px-2.5 py-1 rounded-lg border border-neutral-200 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${contactInfo.email}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-xl border border-neutral-200 transition-colors"
              >
                <span>Compose Email</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-600" />
              </a>

              {contactInfo.emailPlaceholder && (
                <p className="mt-2 text-[11px] text-neutral-400 flex items-center gap-1">
                  <Info className="w-3 h-3 text-neutral-400 shrink-0" />
                  <span>Update your personal email in <code>portfolioData.js</code></span>
                </p>
              )}
            </div>

            {/* LinkedIn Card */}
            <div className="bg-white border border-neutral-200 rounded-3xl p-6 shadow-2xs hover:shadow-xs transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2.5 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200/70">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">LinkedIn Profile</h3>
                  <p className="text-xs text-neutral-500">Professional network & updates</p>
                </div>
              </div>

              <p className="text-xs text-neutral-600 mb-4 leading-normal">
                Connect on LinkedIn for professional networking, internship opportunities, and tech updates.
              </p>

              <a
                href={contactInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 rounded-xl border border-neutral-200 transition-colors"
              >
                <span>Visit LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-600" />
              </a>

              {contactInfo.linkedinPlaceholder && (
                <p className="mt-2 text-[11px] text-neutral-400 flex items-center gap-1">
                  <Info className="w-3 h-3 text-neutral-400 shrink-0" />
                  <span>Update your LinkedIn URL in <code>portfolioData.js</code></span>
                </p>
              )}
            </div>

            {/* Quick Status Pill */}
            <div className="p-4 rounded-2xl bg-white border border-neutral-200 text-xs text-neutral-600 flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
              <div>
                <p className="font-semibold text-neutral-900">Current Status</p>
                <p className="text-[11px] text-neutral-500">
                  Pre-final Year • Actively seeking summer 2026/2027 software engineering internships.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Message Form Column */}
          <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xs">
            <h3 className="text-lg font-bold text-neutral-950 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-500 mb-6">
              Fill in your details below to compose an email directly to Tanisha.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Smith"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 transition-all placeholder:text-neutral-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 transition-all placeholder:text-neutral-400"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="Internship opportunity / Collaboration inquiry"
                  value={formState.subject}
                  onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 transition-all placeholder:text-neutral-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  placeholder="Write your note or opportunity details here..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-xl focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-neutral-900 transition-all placeholder:text-neutral-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-xl transition-all duration-200 shadow-xs hover:shadow focus:outline-hidden focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}

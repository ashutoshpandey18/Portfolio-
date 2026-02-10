'use client';

import { useState, FormEvent, useEffect } from 'react';
import { Send, Calendar, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function ContactMeeting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted!', formData);
    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
        subject: 'Portfolio Contact — Ashutosh Pandey',
        from_name: 'Portfolio Site',
        name: formData.name,
        email: formData.email,
        company: formData.company || 'Not provided',
        message: formData.message,
      };

      console.log('Sending payload:', payload);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      console.log('API Response:', result);

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section id="contact-meeting" className="section-spacing">
      <div className="container-tight">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <p className="text-xs font-medium tracking-widest uppercase text-accent">
            Let&apos;s Connect
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-space tracking-tight">
            Let&apos;s Build Something Real
          </h2>
          <p className="text-neutral-400 text-base max-w-2xl mx-auto">
            Interested in collaborating, hiring, or discussing a system idea — send a message or book a quick call.
          </p>
        </div>

        {/* Main Card */}
        <div className="animated-border rounded-xl">
          <div className="p-6 sm:p-10 bg-gradient-to-br from-surface via-surface to-surface-raised">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              {/* LEFT — Contact Form */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-space flex items-center gap-2">
                    <Send className="text-accent" size={20} strokeWidth={2.5} />
                    Send a Message
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Fill out the form and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-surface border border-border rounded-lg text-white text-sm placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2.5 bg-surface px-1 text-xs font-medium text-neutral-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent"
                    >
                      Name *
                    </label>
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-surface border border-border rounded-lg text-white text-sm placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2.5 bg-surface px-1 text-xs font-medium text-neutral-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent"
                    >
                      Email *
                    </label>
                  </div>

                  {/* Company Field */}
                  <div className="relative">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-surface border border-border rounded-lg text-white text-sm placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200"
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-4 -top-2.5 bg-surface px-1 text-xs font-medium text-neutral-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent"
                    >
                      Company
                    </label>
                  </div>

                  {/* Message Field */}
                  <div className="relative">
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 py-3 bg-surface border border-border rounded-lg text-white text-sm placeholder-transparent focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all duration-200 resize-none"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 -top-2.5 bg-surface px-1 text-xs font-medium text-neutral-400 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-neutral-500 peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-accent"
                    >
                      Message *
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full px-6 py-3 bg-accent hover:bg-accent-glow text-white text-sm font-semibold rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {status === 'success' && (
                    <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm">
                      <CheckCircle size={16} />
                      <span>Message sent successfully! I&apos;ll get back to you soon.</span>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                      <AlertCircle size={16} />
                      <span>{errorMessage}</span>
                    </div>
                  )}
                </form>
              </div>

              {/* RIGHT — Meeting Booking */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-space flex items-center gap-2">
                    <Calendar className="text-accent" size={20} strokeWidth={2.5} />
                    Book a 1:1 Conversation
                  </h3>
                  <p className="text-sm text-neutral-400">
                    Prefer to talk live? Pick a time slot.
                  </p>
                </div>

                {/* Calendly Embed Container */}
                <div className="relative rounded-lg overflow-hidden border border-border bg-surface-raised shadow-lg">
                  <div className="calendly-inline-widget min-h-[500px] w-full">
                    <iframe
                      src="https://calendly.com/ashutoshpandey23june2005/30min"
                      width="100%"
                      height="500"
                      title="Schedule a meeting"
                      className="min-h-[500px] border-0"
                    />
                  </div>
                </div>

                <p className="text-xs text-neutral-500 text-center">
                  All meetings are conducted via Google Meet or Zoom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

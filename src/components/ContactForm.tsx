'use client';

import { useState, useRef } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState<FormStatus>({ type: 'idle', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Sending message...' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus({
                type: 'success',
                message: 'Message sent successfully! I\'ll get back to you soon.'
            });
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error('Contact form error:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again or email me directly at gervicorado@yahoo.com'
            });
        }
    };

    return (
        <section id="contact" className="section bg-gradient-to-b from-background to-white">
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="w-full max-w-4xl">
                    {/* Section header */}
                    <div className="flex flex-col items-center mb-12 w-full">
                        <h2 className="section-title text-center">Get In Touch</h2>
                        <p className="text-gray-600 mt-6 max-w-2xl text-center">
                            Have a project in mind or just want to say hello? I&apos;d love to hear from you.
                            Fill out the form below or reach out through any of my social links.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Contact info grid */}
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="card text-center p-6 hover:translate-y-[-5px] transition-transform">
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-dark-charcoal mb-1">Email</h3>
                                <a
                                    href="mailto:gervicorado@yahoo.com"
                                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                                >
                                    gervicorado@yahoo.com
                                </a>
                            </div>

                            <div className="card text-center p-6 hover:translate-y-[-5px] transition-transform">
                                <div className="w-12 h-12 rounded-lg bg-warm-gold/10 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-warm-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-dark-charcoal mb-1">Location</h3>
                                <p className="text-gray-600 text-sm">Philippines</p>
                            </div>

                            <div className="card text-center p-6 hover:translate-y-[-5px] transition-transform">
                                <div className="w-12 h-12 rounded-lg bg-earth-brown/10 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-6 h-6 text-earth-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-dark-charcoal mb-1">Available For</h3>
                                <p className="text-gray-600 text-sm">Freelance, Collaboration</p>
                            </div>
                        </div>

                        {/* Contact form */}
                        <div className="w-full">
                            <form ref={formRef} onSubmit={handleSubmit} className="card space-y-6 p-8">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-dark-charcoal mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-dark-charcoal mb-2">
                                            Your Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-dark-charcoal mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-gray-50/50"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-charcoal mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none bg-gray-50/50"
                                        placeholder="Tell me about your project or just say hi..."
                                    />
                                </div>

                                {/* Status message */}
                                {status.type !== 'idle' && (
                                    <div className={`p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-700' :
                                        status.type === 'error' ? 'bg-red-50 text-red-700' :
                                            'bg-gray-50 text-gray-700'
                                        }`}>
                                        {status.message}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status.type === 'loading'}
                                    className="btn btn-primary w-full py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status.type === 'loading' ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                            </svg>
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

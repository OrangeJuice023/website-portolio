'use client';

import { useState } from 'react';
import Link from 'next/link';
import { personalContext } from '@/lib/context';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/projects', label: 'Projects' },
        { href: '/dashboards', label: 'Dashboards' },
        { href: '/certifications', label: 'Certifications' },
        { href: '/#contact', label: 'Contact' },
    ];

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm py-4">
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 group"
                    >
                        <img
                            src="/images/logo.png"
                            alt="Gervi Corado Logo"
                            className="w-10 h-10 object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative font-medium transition-colors text-dark-charcoal hover:text-primary after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                            >
                                {link.label}
                            </Link>
                        ))}

                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-5 relative flex flex-col justify-between">
                            <span
                                className={`w-full h-0.5 bg-dark-charcoal transition-all origin-center ${isOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-dark-charcoal transition-all ${isOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-dark-charcoal transition-all origin-center ${isOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-64 pb-4' : 'max-h-0'
                        }`}
                >
                    <div className="flex flex-col gap-2 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-3 rounded-lg font-medium text-dark-charcoal hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}

                    </div>
                </div>
            </div>
        </nav>
    );
}

'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { personalContext } from '@/lib/context';

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background image - flipped horizontally */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(/images/hero-bg.jpg)',
                    transform: 'scaleX(-1)'
                }}
            />

            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />

            {/* Additional overlay elements for depth */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Subtle floating shapes */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-gold/5 rounded-full blur-3xl animate-float delay-200" />
            </div>

            <div className="w-full max-w-4xl px-6 relative z-10 flex flex-col items-center text-center">
                {/* Status badge */}
                <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 ${mounted ? 'animate-fade-in-up' : 'opacity-0'
                        }`}
                >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {personalContext.education.current.year} {personalContext.education.current.degree} Student
                </div>

                {/* Main heading */}
                <h1
                    className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${mounted ? 'animate-fade-in-up delay-100' : 'opacity-0'
                        }`}
                >
                    Hi, I&apos;m{' '}
                    <span className="gradient-text">{personalContext.name}</span>
                </h1>

                {/* Subtitle */}
                <p
                    className={`text-xl md:text-2xl text-earth-brown mb-4 ${mounted ? 'animate-fade-in-up delay-200' : 'opacity-0'
                        }`}
                >
                    {personalContext.title}
                </p>

                {/* Description */}
                <p
                    className={`text-lg text-gray-600 max-w-2xl mx-auto mb-8 ${mounted ? 'animate-fade-in-up delay-300' : 'opacity-0'
                        }`}
                >
                    {personalContext.shortBio}
                </p>

                {/* Tech stack pills */}
                <div
                    className={`flex flex-wrap justify-center gap-3 mb-10 ${mounted ? 'animate-fade-in-up delay-400' : 'opacity-0'
                        }`}
                >
                    {personalContext.skills.languages.slice(0, 4).map((skill) => (
                        <span
                            key={skill.name}
                            className="tech-tag flex items-center gap-1"
                        >
                            <span>{skill.icon}</span>
                            {skill.name}
                        </span>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div
                    className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${mounted ? 'animate-fade-in-up delay-500' : 'opacity-0'
                        }`}
                >
                    <Link href="/projects" className="btn btn-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                        View My Work
                    </Link>
                    <Link href="/#contact" className="btn btn-secondary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}

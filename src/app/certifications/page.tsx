'use client';

import Image from 'next/image';
import Link from 'next/link';
import { personalContext } from '@/lib/context';

export default function CertificationsPage() {
    const { certifications } = personalContext;

    return (
        <main className="min-h-screen pt-24 pb-16 bg-background">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-3xl mb-12 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-bold text-dark-charcoal mb-4">
                        Certifications
                    </h1>
                    <p className="text-lg text-gray-600">
                        Professional certifications and specialized training I've completed to sharpen my technical skills.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {certifications.map((cert, index) => (
                        <article
                            key={cert.id}
                            className="card group overflow-hidden animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Image Preview */}
                            <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden bg-gray-100 group-hover:cursor-pointer">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-dark-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Link
                                        href={cert.image}
                                        target="_blank"
                                        className="btn btn-primary"
                                    >
                                        View Full Certificate
                                    </Link>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-sm font-bold text-primary uppercase tracking-widest">
                                        {cert.issuer}
                                    </span>
                                    <span className="text-sm text-gray-500 font-medium">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-dark-charcoal mb-3 group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>

                                <p className="text-sm text-gray-500 mb-6 font-mono">
                                    Credential ID: {cert.credentialId}
                                </p>

                                {/* Skills Developed */}
                                <div className="mt-auto">
                                    <h4 className="text-xs font-bold text-dark-charcoal uppercase tracking-widest mb-3 opacity-60">
                                        Skills Developed
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {cert.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="tech-tag"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Empty State placeholder if needed later */}
                {certifications.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No certifications added yet.</p>
                    </div>
                )}
            </div>
        </main>
    );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    techStack: string[];
    category: string;
    featured?: boolean;
    demoUrl?: string | null;
    repoUrl?: string | null;
    status?: string;
}

interface ProjectCardProps {
    project: Project;
    index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
    return (
        <article
            className="card group overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image container */}
            <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-warm-gold/20">
                {project.image && project.image !== '/images/placeholder.png' ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl opacity-20">
                            {project.category === 'Web Development' ? '🌐' :
                                project.category === 'Data Science' ? '📊' : '💻'}
                        </div>
                    </div>
                )}

                {/* Status badge */}
                {project.status && (
                    <div className={`absolute top-4 right-4 px-4 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest whitespace-nowrap z-10 ${project.status === 'Completed'
                        ? 'bg-primary text-white shadow-md'
                        : 'bg-warm-gold text-dark-charcoal shadow-md'
                        }`}>
                        {project.status}
                    </div>
                )}

                {/* Featured badge */}
                {project.featured && (
                    <div className="absolute top-4 left-4 px-4 py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest bg-earth-brown text-white shadow-md whitespace-nowrap flex items-center gap-1 z-10">
                        ⭐ Featured
                    </div>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-dark-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        {project.demoUrl && (
                            <Link
                                href={project.demoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-full text-sm py-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                                View Project
                            </Link>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div>
                {/* Category */}
                <span className="text-sm text-primary font-medium">{project.category}</span>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-charcoal mt-1 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span key={tech} className="tech-tag text-xs">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

'use client';

import Image from 'next/image';

interface Dashboard {
    id: number;
    title: string;
    description: string;
    image: string;
    tool: string;
    category: string;
    featured?: boolean;
    previewUrl?: string;
    metrics?: string[];
}

interface DashboardCardProps {
    dashboard: Dashboard;
    index?: number;
}

export default function DashboardCard({ dashboard, index = 0 }: DashboardCardProps) {
    return (
        <article
            className="card group overflow-hidden animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Image container */}
            <div className="relative h-52 -mx-6 -mt-6 mb-4 overflow-hidden bg-gradient-to-br from-warm-gold/20 to-primary/20">
                {dashboard.image && dashboard.image !== '/images/placeholder.png' ? (
                    <Image
                        src={dashboard.image}
                        alt={dashboard.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-7xl opacity-30">
                            📊
                        </div>
                    </div>
                )}

                {/* Tool badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-dark-charcoal shadow-sm">
                    {dashboard.tool === 'Tableau' ? '📈' : '📉'} {dashboard.tool}
                </div>

                {/* Featured badge */}
                {dashboard.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-warm-gold text-dark-charcoal">
                        ⭐ Featured
                    </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-charcoal/80 via-dark-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                        {dashboard.previewUrl && dashboard.previewUrl !== '#' && (
                            <a
                                href={dashboard.previewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary w-full text-sm py-2"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                View Dashboard
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div>
                {/* Category */}
                <span className="text-sm text-warm-gold font-medium">{dashboard.category}</span>

                {/* Title */}
                <h3 className="text-xl font-bold text-dark-charcoal mt-1 mb-2 group-hover:text-primary transition-colors">
                    {dashboard.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {dashboard.description}
                </p>

                {/* Metrics */}
                {dashboard.metrics && dashboard.metrics.length > 0 && (
                    <div className="border-t border-gray-100 pt-4 mt-auto">
                        <p className="text-xs text-gray-500 mb-2 font-medium">Key Metrics:</p>
                        <div className="flex flex-wrap gap-1.5">
                            {dashboard.metrics.slice(0, 3).map((metric) => (
                                <span
                                    key={metric}
                                    className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                                >
                                    {metric}
                                </span>
                            ))}
                            {dashboard.metrics.length > 3 && (
                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded">
                                    +{dashboard.metrics.length - 3} more
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </article>
    );
}

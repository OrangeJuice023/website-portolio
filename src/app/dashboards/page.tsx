import { Metadata } from 'next';
import DashboardCard from '@/components/DashboardCard';
import { personalContext } from '@/lib/context';

export const metadata: Metadata = {
    title: 'Dashboards | ' + personalContext.name,
    description: 'Explore my data visualization dashboards created with Tableau and Looker Studio.',
};

export default function DashboardsPage() {
    const dashboards = personalContext.dashboards;
    const tools = [...new Set(dashboards.map(d => d.tool))];

    return (
        <main className="min-h-screen pt-48 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                        Dashboard <span className="gradient-text-gold">Gallery</span>
                    </h1>
                    <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
                        Interactive data visualizations and business intelligence dashboards.
                        Transforming complex data into actionable insights.
                    </p>
                </div>
            </section>

            {/* Tools Filter */}
            <section className="container mx-auto px-6 mb-8">
                <div className="flex flex-wrap gap-3 animate-fade-in-up delay-200">
                    <button className="px-4 py-2 rounded-full text-sm font-medium bg-primary text-white shadow-lg shadow-primary/30 transition-all hover:scale-105">
                        All Dashboards
                    </button>
                    {tools.map((tool) => (
                        <button
                            key={tool}
                            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-warm-gold/20 hover:text-warm-gold transition-colors"
                        >
                            {tool === 'Tableau' ? '📈' : '📉'} {tool}
                        </button>
                    ))}
                </div>
            </section>

            <div className="w-full h-8 block"></div>

            {/* Dashboards Grid */}
            <section className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dashboards.map((dashboard, index) => (
                        <DashboardCard key={dashboard.id} dashboard={dashboard} index={index} />
                    ))}
                </div>

                {dashboards.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">📊</div>
                        <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                            Dashboards Coming Soon
                        </h3>
                        <p className="text-gray-600">
                            I&apos;m currently working on some exciting data visualizations. Check back soon!
                        </p>
                    </div>
                )}
            </section>

            {/* Skills Section */}
            <section className="container mx-auto px-6 mt-16">
                <div className="card">
                    <h2 className="text-2xl font-bold text-dark-charcoal mb-6">
                        Data Visualization Skills
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="text-center p-4 rounded-lg bg-gray-50">
                            <div className="text-3xl mb-2">📈</div>
                            <h3 className="font-semibold text-dark-charcoal">Tableau</h3>
                            <p className="text-sm text-gray-500">Interactive dashboards</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-gray-50">
                            <div className="text-3xl mb-2">📉</div>
                            <h3 className="font-semibold text-dark-charcoal">Looker Studio</h3>
                            <p className="text-sm text-gray-500">Google data visualization</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-gray-50">
                            <div className="text-3xl mb-2">🐍</div>
                            <h3 className="font-semibold text-dark-charcoal">Python</h3>
                            <p className="text-sm text-gray-500">Matplotlib, Plotly</p>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-gray-50">
                            <div className="text-3xl mb-2">📊</div>
                            <h3 className="font-semibold text-dark-charcoal">R</h3>
                            <p className="text-sm text-gray-500">ggplot2, Shiny</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Spacer */}
            <div className="w-full h-12 block"></div>

            {/* CTA Section */}
            <section className="container mx-auto px-6 mt-12 mb-24 flex justify-center">
                <div className="card bg-gradient-to-br from-warm-gold/10 to-primary/10 flex flex-col items-center text-center py-12 w-full max-w-3xl">
                    <h2 className="text-2xl font-bold text-dark-charcoal mb-4">
                        Need a custom dashboard?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                        I can help you visualize your data and create insightful dashboards
                        tailored to your business needs.
                    </p>
                    <a href="/#contact" className="btn btn-gold">
                        Let&apos;s Discuss
                    </a>
                </div>
            </section>
        </main>
    );
}

import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { personalContext } from '@/lib/context';

export const metadata: Metadata = {
    title: 'Projects | ' + personalContext.name,
    description: 'Explore my coding projects including web development, data science, and software engineering work.',
};

export default function ProjectsPage() {
    const projects = personalContext.projects;
    const categories = [...new Set(projects.map(p => p.category))];

    return (
        <main className="min-h-screen pt-48 pb-16">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-12">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
                        A collection of my work spanning web development, data science, and software engineering.
                        Each project represents a step in my continuous learning journey.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="container mx-auto px-6 mb-16">
                <div className="flex flex-wrap gap-3 animate-fade-in-up delay-200">
                    <button className="tech-tag bg-primary text-white hover:bg-primary-dark">
                        All Projects
                    </button>
                    {categories.map((category) => (
                        <button key={category} className="tech-tag">
                            {category}
                        </button>
                    ))}
                </div>
            </section>

            <div className="w-full h-8 block"></div>

            {/* Projects Grid */}
            <section className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {projects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🚧</div>
                        <h3 className="text-xl font-semibold text-dark-charcoal mb-2">
                            Projects Coming Soon
                        </h3>
                        <p className="text-gray-600">
                            I&apos;m currently working on some exciting projects. Check back soon!
                        </p>
                    </div>
                )}
            </section>

            {/* Spacer */}
            <div className="w-full h-12 block"></div>

            {/* CTA Section */}
            <section className="container mx-auto px-6 mt-12 mb-24 flex justify-center">
                <div className="card bg-gradient-to-br from-primary/10 to-warm-gold/10 flex flex-col items-center text-center py-12 w-full max-w-3xl">
                    <h2 className="text-2xl font-bold text-dark-charcoal mb-4">
                        Interested in collaborating?
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto text-center">
                        I&apos;m always open to new opportunities and interesting projects.
                        Let&apos;s build something amazing together!
                    </p>
                    <a href="/#contact" className="btn btn-primary">
                        Get In Touch
                    </a>
                </div>
            </section>
        </main>
    );
}

import Link from 'next/link';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import DashboardCard from '@/components/DashboardCard';
import ContactForm from '@/components/ContactForm';
import { personalContext } from '@/lib/context';

export default function Home() {
  const featuredProjects = personalContext.projects.filter(p => p.featured);
  const featuredDashboards = personalContext.dashboards.filter(d => d.featured);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="section bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="section-title">About Me</h2>
              <div className="mt-8 text-gray-600 leading-relaxed">
                <p className="text-lg font-medium text-dark-charcoal mb-6">
                  {personalContext.bio.split('\n\n')[0]}
                </p>
                {personalContext.bio.split('\n\n').slice(1).map((paragraph, index) => {
                  // Check if paragraph has bold markers **text**
                  if (paragraph.includes('**')) {
                    const boldText = paragraph.match(/\*\*(.*?)\*\*/)?.[1];
                    return (
                      <p key={index} className="text-lg font-bold text-primary italic mt-6">
                        {boldText}
                      </p>
                    );
                  }
                  return <p key={index} className="text-base mb-4">{paragraph}</p>;
                })}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {personalContext.interests.slice(0, 4).map((interest) => (
                  <span key={interest} className="tech-tag">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in-up delay-200">
              <div className="card text-center">
                <div className="text-4xl mb-2">💻</div>
                <h3 className="font-bold text-dark-charcoal">Languages</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {personalContext.skills.languages.map(s => s.name).join(', ')}
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-2">📊</div>
                <h3 className="font-bold text-dark-charcoal">Data Tools</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {personalContext.skills.dataTools.map(s => s.name).join(', ')}
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-2">🌐</div>
                <h3 className="font-bold text-dark-charcoal">Web Dev</h3>
                <p className="text-sm text-gray-500 mt-1">
                  {personalContext.skills.frameworks.map(s => s.name).join(', ')}
                </p>
              </div>
              <div className="card text-center">
                <div className="text-4xl mb-2">📅</div>
                <h3 className="font-bold text-dark-charcoal">Experience</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Learning since {personalContext.education.programmingJourney.started}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section bg-gradient-to-b from-white to-background">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title">Featured Projects</h2>
              <p className="text-gray-600 mt-6">Some of my recent work that I&apos;m proud of</p>
            </div>
            <Link
              href="/projects"
              className="btn btn-secondary text-sm hidden sm:inline-flex"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/projects" className="btn btn-secondary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Dashboards */}
      <section className="section bg-background">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="section-title">Dashboard Gallery</h2>
              <p className="text-gray-600 mt-6">Data visualizations and business intelligence work</p>
            </div>
            <Link
              href="/dashboards"
              className="btn btn-gold text-sm hidden sm:inline-flex"
            >
              View All Dashboards
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredDashboards.map((dashboard, index) => (
              <DashboardCard key={dashboard.id} dashboard={dashboard} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link href="/dashboards" className="btn btn-gold">
              View All Dashboards
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </main>
  );
}

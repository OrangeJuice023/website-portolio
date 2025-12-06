// Personal context for the portfolio website
// This file contains all personal information used throughout the site
// and for the AI chatbot's context awareness

export const personalContext = {
    // Basic Information
    name: "Gervi Corado",
    title: "Engineering Student & Aspiring Developer",
    tagline: "Building the future through code and data",

    // About
    bio: `I'm a second-year engineering student driven by data, discipline, and constant improvement.

I build with SQL, explore real-world problems, and level up every day through DataCamp and Coursera. Outside the screen, I train hard in the gym because I believe in one truth:

**You are defined by what you do everyday.**`,

    shortBio: "2nd year engineering student driven by data, discipline, and constant improvement.",

    // Skills categorized
    skills: {
        languages: [
            { name: "Python", level: "Advanced", icon: "🐍" },
            { name: "JavaScript", level: "Intermediate", icon: "⚡" },
            { name: "SQL", level: "Advanced", icon: "🗄️" },
            { name: "R", level: "Intermediate", icon: "📊" },
        ],
        frameworks: [
            { name: "Next.js", level: "Learning", icon: "▲" },
            { name: "React", level: "Learning", icon: "⚛️" },
            { name: "Node.js", level: "Learning", icon: "🟢" },
        ],
        dataTools: [
            { name: "Tableau", level: "Intermediate", icon: "📈" },
            { name: "Looker Studio", level: "Intermediate", icon: "📉" },
            { name: "Pandas", level: "Intermediate", icon: "🐼" },
        ],
        other: [
            { name: "Git", level: "Intermediate", icon: "🔀" },
            { name: "VS Code", level: "Advanced", icon: "💻" },
            { name: "Data Visualization", level: "Intermediate", icon: "📊" },
        ]
    },

    // Flat skills list for easy iteration
    allSkills: ["Python", "JavaScript", "SQL", "R", "Next.js", "React", "Tableau", "Looker Studio", "Git", "Data Visualization", "Pandas", "Node.js"],

    // Projects
    projects: [

        {
            id: 1,
            title: "Portfolio Website",
            description: "A modern portfolio website powered by Gemini AI chatbot, built with Next.js 14 and TailwindCSS. Inspired by Bryl Lim's design philosophy.",
            longDescription: "This portfolio showcases my work as a developer. Features include an AI-powered chatbot using Google's Gemini API for interactive visitor engagement, a sleek Forest Professional design theme, and a fully responsive layout. Built with modern web technologies for optimal performance.",
            image: "/images/portfolio-preview.jpg",
            techStack: ["Next.js", "TailwindCSS", "Gemini AI", "TypeScript"],
            category: "Web Development",
            featured: true,
            demoUrl: "#",
            repoUrl: "https://github.com/OrangeJuice023/portfolio",
            status: "In Progress"
        },
        {
            id: 2,
            title: "Work in Progress",
            description: "Exciting new project currently under development.",
            longDescription: "This project is currently being built. Check back soon for updates.",
            image: "/images/placeholder-project.jpg",
            techStack: ["Coming Soon"],
            category: "Development",
            featured: false,
            demoUrl: null,
            repoUrl: null,
            status: "In Progress"
        },
        {
            id: 3,
            title: "Work in Progress",
            description: "Another innovative project in the pipeline.",
            longDescription: "This project is currently being built. Check back soon for updates.",
            image: "/images/placeholder-project.jpg",
            techStack: ["Coming Soon"],
            category: "Development",
            featured: false,
            demoUrl: null,
            repoUrl: null,
            status: "In Progress"
        }
    ],

    // Dashboards
    dashboards: [
        {
            id: 4,
            title: "Production Order Quality Dashboard",
            description: "Analyzes production order quality across planning plants with tracking for clean vs. error orders and firming trends.",
            image: "/images/production-quality-dashboard.jpg",
            tool: "Looker Studio",
            category: "Operations",
            featured: true,
            previewUrl: "#",
            metrics: ["Order Quality", "Firming Trends", "Error Rates", "Material Breakdown"]
        },
        {
            id: 1,
            title: "Work in Progress",
            description: "New dashboard currently under development.",
            image: "/images/placeholder-dashboard.jpg",
            tool: "Coming Soon",
            category: "Analytics",
            featured: false,
            previewUrl: "#",
            metrics: ["Coming Soon"]
        },
        {
            id: 2,
            title: "Work in Progress",
            description: "New dashboard currently under development.",
            image: "/images/placeholder-dashboard.jpg",
            tool: "Coming Soon",
            category: "Analytics",
            featured: false,
            previewUrl: "#",
            metrics: ["Coming Soon"]
        },
        {
            id: 3,
            title: "Work in Progress",
            description: "New dashboard currently under development.",
            image: "/images/placeholder-dashboard.jpg",
            tool: "Coming Soon",
            category: "Analytics",
            featured: false,
            previewUrl: "#",
            metrics: ["Coming Soon"]
        }
    ],

    // Experience/Education
    education: {
        current: {
            degree: "Engineering",
            year: "2nd Year",
            status: "Currently Enrolled"
        },
        programmingJourney: {
            started: 2020,
            yearsOfExperience: new Date().getFullYear() - 2020
        }
    },

    // Interests
    interests: [
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Data Engineering",
        "Machine Learning",
        "Business Intelligence",
        "Automation"
    ],

    // Contact Information
    contact: {
        email: "gervicorado@yahoo.com",
        social: {
            github: "https://github.com/OrangeJuice023",
            linkedin: "https://linkedin.com/in/gervi-paulo-corado-9234352aa",
            twitter: null
        },
        location: "Philippines",
        availableFor: ["Freelance Projects", "Collaboration", "Internships"]
    },

    // Meta information for SEO
    meta: {
        siteTitle: "Gervi Corado | Engineering Student & Developer",
        siteDescription: "Portfolio of Gervi Corado - 2nd year engineering student specializing in web development, software engineering, and data science. Explore my projects and dashboards.",
        keywords: ["developer", "engineering student", "data science", "web development", "Python", "JavaScript", "portfolio"]
    }
};

// AI Chatbot context - structured information for the AI to use
export const chatbotContext = `
You are an AI assistant on Gervi Corado's portfolio website. Here's what you should know about Gervi:

ABOUT GERVI:
- Name: Gervi Corado
- Status: 2nd year engineering student
- Programming journey started in 2020 (${new Date().getFullYear() - 2020}+ years of learning)
- Focus areas: Web Development, Software Engineering, and Data Science/Engineering

TECHNICAL SKILLS:
- Main languages: Python (Advanced), SQL (Advanced), JavaScript (Intermediate), R (Intermediate)
- Data visualization tools: Tableau and Looker Studio
- Web technologies: Currently learning Next.js, React, Node.js
- Other tools: Git, VS Code, Pandas

PROJECTS:
- Building a modern portfolio website with Next.js and AI chatbot integration
- Created data analysis pipelines with Python
- Developed interactive dashboard templates

DASHBOARDS:
- Sales Analytics Dashboard (Tableau)
- Marketing Performance Tracker (Looker Studio)  
- Student Performance Analysis (Tableau)

CONTACT:
- Email: gervicorado@yahoo.com
- GitHub: https://github.com/OrangeJuice023
- LinkedIn: https://linkedin.com/in/gervi-paulo-corado-9234352aa
- Available for: Freelance projects, Collaboration, Internships

PERSONALITY GUIDELINES:
- Be helpful and friendly
- Speak as if representing Gervi in third person
- If asked about something not in this context, politely say you don't have that information
- Encourage visitors to reach out via the contact form for specific inquiries
- Be enthusiastic about Gervi's work and learning journey
`;

export default personalContext;

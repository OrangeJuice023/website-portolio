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
            demoUrl: "/images/portfolio-preview.jpg",
            repoUrl: "https://github.com/OrangeJuice023/portfolio",
            status: "In Progress"
        },
        {
            id: 2,
            title: "CS50x Birthdays",
            description: "A Flask web application to track friends' birthdays using SQLite.",
            longDescription: "Built as part of CS50x. Features a SQLite database, Flask backend, and Jinja2 templating. Allows users to add and view birthdays persistently.",
            image: "/images/cs50-birthdays.png",
            techStack: ["Python", "Flask", "SQLite", "HTML/CSS"],
            category: "Web Development",
            featured: false,
            demoUrl: "http://127.0.0.1:5000",
            repoUrl: null,
            status: "Completed"
        },
        {
            id: 3,
            title: "CS50 Finance",
            description: "A stock trading simulator that lets users trade stocks with real-world market data.",
            longDescription: "A full-stack web application built for CS50x. It features user authentication, a virtual cash balance, and real-time stock price integration via the Massive (Polygon.io) API. Users can search for stock quotes, buy and sell shares, and view their transaction history.",
            image: "/images/finance-cs50.png",
            techStack: ["Python", "Flask", "SQLite", "Massive API"],
            category: "Web Development",
            featured: true,
            demoUrl: "http://127.0.0.1:5002",
            repoUrl: null,
            status: "Completed"
        },
        {
            id: 4,
            title: "Minesweeper UP",
            description: "A Python implementation of classic Minesweeper with a unique power-up mechanic.",
            longDescription: "Developed as a graduation project for UP Diliman. It features a custom 7x7 grid, auto-reveal flood-fill algorithm, and a unique 'Defuser' power-up that clears a 3x3 area. Built with Python and focuses on algorithmic efficiency and game state management.",
            image: "/images/minesweeper-up.png",
            techStack: ["Python", "Algorithms", "Game Dev"],
            category: "Software Engineering",
            featured: true,
            demoUrl: "/images/minesweeper-up.png",
            repoUrl: "https://github.com/OrangeJuice023/minesweeper-up",
            status: "Completed"
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
            previewUrl: "/images/production-quality-dashboard.jpg",
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

    // Certifications
    certifications: [
        {
            id: 1,
            title: "CS50x: CS50's Introduction to Computer Science",
            issuer: "HarvardX",
            date: "Issued Jan 2022",
            credentialId: "09ac1fa5bd334e7398b922bd7a912c41",
            skills: ["Python", "MySQL", "C#", "JavaScript"],
            image: "/images/cs50-cert.png",
            url: "https://certificates.cs50.io/09ac1fa5bd334e7398b922bd7a912c41"
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
- Web technologies: Next.js, React, Node.js (Learning/Building)
- Other tools: Git, VS Code, Pandas

PROJECTS (All Completed):
1. **Portfolio Website**: Modern personal site with Gemini AI integration (Next.js, Tailwind).
2. **CS50x Birthdays**: Flask app for tracking birthdays using SQLite.
3. **CS50 Finance**: Full-stack stock simulator using Python/Flask and Massive (Polygon.io) API.
4. **Minesweeper UP**: Python game with a custom power-up mechanic, built as a project for UP Diliman.

DASHBOARDS:
- Production Order Quality Dashboard (Looker Studio) - Active
- Multiple analytics projects currently in the pipeline.

CERTIFICATIONS:
1. **CS50x: CS50's Introduction to Computer Science** (HarvardX, 2022)
   - Skills: Python, MySQL, C#, JavaScript
   - Credential ID: 09ac1fa5bd334e7398b922bd7a912c41

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

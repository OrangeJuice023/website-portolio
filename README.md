# Gervi Corado - Portfolio Website

A modern, professional portfolio website built with Next.js 14+, TailwindCSS, and featuring an AI-powered chatbot using Google's Gemini AI.

## ✨ Features

- **Modern Design**: Forest Professional color palette with smooth animations
- **AI Chatbot**: Powered by Google Gemini AI with context-aware responses
- **Responsive**: Fully responsive design for all devices
- **Fast**: Built with Next.js 14 App Router for optimal performance
- **Contact Form**: Integrated with Resend for reliable email delivery
- **SEO Optimized**: Meta tags and structured data included

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- A Google Gemini API key
- A Resend account (free tier: 100 emails/month)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gervicorado/portfolio.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install resend
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Gemini AI API Key (required for chatbot)
   GEMINI_API_KEY=your_gemini_api_key_here
   
   # Resend API Key (required for contact form)
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📧 Resend Setup

1. Create a free account at [Resend](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys) and create a new key
3. Copy the API key to your `.env.local` file

### Production Setup

For production use, you'll need to:
1. Add and verify your own domain in Resend
2. Update the `from` address in `/src/app/api/contact/route.ts`:
   ```typescript
   from: 'Contact <contact@yourdomain.com>'
   ```

## 🤖 Gemini AI Setup

1. Get an API key from [Google AI Studio](https://aistudio.google.com/)
2. Add it to your `.env.local` file
3. The chatbot context is defined in `src/lib/context.js`

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/          # Gemini AI endpoint
│   │   │   └── contact/       # Resend email endpoint
│   │   ├── projects/          # Projects page
│   │   ├── dashboards/        # Dashboards page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── DashboardCard.tsx
│   │   ├── ChatBot.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── context.js         # Personal data & chatbot context
├── public/
│   └── images/
├── .env.example
└── package.json
```

## 🎨 Customization

### Personal Information

Edit `src/lib/context.js` to update:
- Name, title, and bio
- Skills and experience
- Projects and dashboards
- Contact information
- Social links

### Color Theme

The Forest Professional color palette is defined in `src/app/globals.css`:
- Primary: Emerald Green (#2E8B57)
- Dark Charcoal: #1A1A1A
- Earth Brown: #6B4F3A
- Warm Gold: #C9A66B
- Background: Linen (#F2EEE3)

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `GEMINI_API_KEY`
   - `RESEND_API_KEY`
4. Deploy!

### Manual Build

```bash
npm run build
npm start
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `GEMINI_API_KEY` | Google Gemini API key | Yes (for chatbot) |
| `RESEND_API_KEY` | Resend API key | Yes (for contact form) |

## 🛠️ Built With

- [Next.js 14](https://nextjs.org/) - React framework
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Google Gemini AI](https://ai.google.dev/) - AI chatbot
- [Resend](https://resend.com/) - Email service
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Gervi Corado**
- Email: gervicorado@yahoo.com
- GitHub: [@OrangeJuice023](https://github.com/OrangeJuice023)
- LinkedIn: [Gervi Paulo Corado](https://linkedin.com/in/gervi-paulo-corado-9234352aa)

---

⭐ Star this repo if you found it helpful!

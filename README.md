# Metro Point Technology Website

Official website for Metro Point Technology - Insurance software built by agents, for agents.

## 🌐 Website URL
**www.MetroPointTech.com** (Live - hosted on Microsoft)

## 🎯 Purpose
Showcase Metro Point Technology's insurance software products:
- **AMS Platform** - Multi-tenant agency management with Mirror Architecture
- **Agent Commission Tracker** - Commission tracking for independent agents
- **CRM Lite** - Contact management (coming soon)

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **TypeScript**: For type safety
- **Deployment**: Microsoft Hosting (via GitHub)
- **GitHub Repo**: https://github.com/pstabell/metropointtech-website

## 📁 Project Structure
```
MetroPointTech/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── layout.tsx         # Root layout with navbar/footer
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact form
│   │   └── products/          # Product pages
│   │       ├── ams/          # AMS Platform page
│   │       └── commission-tracker/  # Commission Tracker page
│   ├── components/            # Reusable components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ValueProposition.tsx
│   │   ├── ProductShowcase.tsx
│   │   └── CallToAction.tsx
│   └── styles/
│       └── globals.css        # Global styles
├── public/
│   └── images/                # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   cd "C:\Users\Patri\Metro Point Insurance\Metro Point Technology - Documents\Websites\MetroPointTech"
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to http://localhost:3000

### Build for Production

```bash
npm run build
npm start
```

## 🚀 DEPLOYMENT

**IMPORTANT: To update the live website at www.MetroPointTech.com**

The website is hosted on **Microsoft** and automatically deploys from GitHub.

### Steps to Deploy Changes:

1. **Commit your changes:**
   ```bash
   git add .
   git commit -m "Your commit message"
   ```

2. **Push to GitHub:**
   ```bash
   git push origin master
   ```

3. **GitHub Repository:**
   - Username: `pstabell`
   - Repo: `metropointtech-website`
   - URL: https://github.com/pstabell/metropointtech-website

4. **Microsoft hosting automatically deploys** from the GitHub repo

**Note:** Changes may take a few minutes to appear on the live site after pushing to GitHub.

## 🎨 Design System

### Colors
- **Primary Navy**: `#003B5C` (Navy Blue)
- **Primary Dark**: `#002940` (Darker Navy)
- **Primary Light**: `#8BA5B8` (Light Navy)
- **Accent Gold**: `#D4AF37` (Gold)
- **Accent Dark**: `#C19B2B` (Dark Gold)
- **Accent Light**: `#E5C158` (Light Gold)
- **Neutral Dark**: `#404040` (text)
- **Neutral Light**: `#9C9A9A` (secondary text)

### Typography
- **Headings**: Alata (serif)
- **Body**: Inter (sans-serif)

### Branding
Consistent with existing Metro Point properties:
- [metropointinsurance.com](https://metropointinsurance.com)
- [agentcommissiontracker.com](https://www.agentcommissiontracker.com)

## 📝 Key Messaging

### Value Proposition
"Insurance software built by agents, for agents"

### Differentiators
1. **Built by an active agent** - 30 years experience (Patrick Stabell)
2. **Battle-tested** - Runs Metro Point Insurance daily
3. **Community-driven** - Features shaped by agent feedback
4. **Bootstrap model** - Customer-funded development

### Products
1. **AMS Platform** - For agencies with Mirror Architecture (Contact for Pricing)
2. **Commission Tracker** - For independent agents (Free Trial)
3. **Agent CRM** (Launching Q1 2026) - Contact management
4. **WRAP Proposal Generator** - Free tool at wrap.metropointtech.com

## 🔗 Related Properties
- **Metro Point Insurance**: https://metropointinsurance.com
- **Agent Commission Tracker**: https://www.agentcommissiontracker.com

## 📞 Contact
- **Email**: contact@metropointtech.com
- **Office**: Cape Coral, FL

## 🚧 TODO Before Launch

- [ ] Add company logo image to `/public/images/`
- [ ] Set up form submission backend (contact form)
- [ ] Configure custom domain (MetroPointTech.com)
- [ ] Set up analytics (Google Analytics or similar)
- [ ] Add meta tags for social media sharing (Open Graph)
- [ ] Create favicon
- [ ] Test responsive design on all devices
- [ ] SEO optimization (meta descriptions, keywords)
- [ ] Set up email service for contact form
- [ ] Add any product screenshots/demos

## 📄 License
Proprietary - Metro Point Technology. All rights reserved.

## 👨‍💻 Developer
Built by Patrick Stabell with AI assistance (Claude)
A division of Metro Point Insurance Services, LLC

---

*Last updated: November 2025*

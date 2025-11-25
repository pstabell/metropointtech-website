# Metro Point Technology Website

Official website for Metro Point Technology - Insurance software built by agents, for agents.

## 🌐 Website URL
**MetroPointTech.com** (to be deployed)

## 🎯 Purpose
Showcase Metro Point Technology's insurance software products:
- **AMS Platform** - Multi-tenant agency management with Mirror Architecture
- **Agent Commission Tracker** - Commission tracking for independent agents
- **CRM Lite** - Contact management (coming soon)

## 🛠️ Tech Stack
- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **TypeScript**: For type safety
- **Deployment**: Vercel (recommended) or similar

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

## 🎨 Design System

### Colors
- **Primary Blue**: `#2563eb` (from Metro Point Insurance)
- **Accent Tan/Gold**: `#BA977B` (from Agent Commission Tracker)
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
1. **AMS Platform** ($299-$999/mo) - For agencies with Mirror Architecture
2. **Commission Tracker** ($19.99/mo) - For independent agents
3. **CRM Lite** (Coming Soon) - Contact management

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

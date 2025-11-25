# Quick Start Guide - MetroPointTech.com

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
Open PowerShell and run:
```powershell
cd "C:\Users\Patri\Metro Point Insurance\Metro Point Technology - Documents\Websites\MetroPointTech"
npm install
```

### Step 2: Start Development Server
```powershell
npm run dev
```

### Step 3: Open Browser
Navigate to: **http://localhost:3000**

---

## 📄 Pages Created

✅ **Homepage** (`/`) - Hero, value prop, product showcase, CTA
✅ **AMS Platform** (`/products/ams`) - Mirror Architecture details, pricing
✅ **Commission Tracker** (`/products/commission-tracker`) - Features, testimonials
✅ **About** (`/about`) - Your story, philosophy, Metro Point connection
✅ **Contact** (`/contact`) - Demo request form, contact info

---

## 🎨 Design Highlights

- **Colors**: Blue (primary) + Tan/Gold (accent) from your existing sites
- **Fonts**: Alata (headings) + Inter (body)
- **Mobile-First**: Fully responsive design
- **Components**: Reusable Navbar, Footer, Hero, etc.

---

## ✏️ Customization Tips

### Change Colors
Edit `tailwind.config.ts` - update the color values

### Update Content
- Homepage: `src/app/page.tsx`
- Product pages: `src/app/products/*/page.tsx`
- About: `src/app/about/page.tsx`

### Add Logo
Place your logo in `/public/images/logo.png`
Then update: `src/components/Navbar.tsx` (currently shows text logo)

### Contact Form
Currently logs to console. To make it functional:
1. Set up email service (SendGrid, Resend, etc.)
2. Create API route: `src/app/api/contact/route.ts`
3. Update form submission in `src/app/contact/page.tsx`

---

## 🚢 Deployment

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Other Hosts
```bash
npm run build
npm start
```

Deploy the `.next` folder to any Node.js host

---

## 📞 Need Help?

See the full README.md for detailed documentation.

---

**Built with**: Next.js 14 + Tailwind CSS + TypeScript
**Ready to deploy**: Just add your logo and set up the contact form backend!

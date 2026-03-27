# SkillsNova - Course Selling Website

A production-ready, premium course-selling website built with Next.js 15, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern UI/UX**: Clean, premium design with glassmorphism, gradients, and smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Telegram Integration**: Complete sales flow through Telegram
- **Lead Capture Form**: Collects user data and sends to Telegram bot
- **SEO Optimized**: Full metadata, Open Graph, and Twitter cards support
- **Performance Optimized**: Built for Vercel deployment with optimal performance

## 📦 Courses Included

1. **English Basic** - $149 (Beginner level)
2. **English Advanced** - $699 (Best Value)
3. **AI Video** - $999 (Trending)
4. **Complete AI** - $1399 (Premium, Most Popular)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Telegram Bot Token
- Telegram Chat ID

## 🔧 Setup Instructions

### 1. Clone and Install

```bash
cd skillsnova
npm install
```

### 2. Set Up Telegram Bot

1. **Create a Bot**:
   - Open Telegram and search for `@BotFather`
   - Send `/newbot` command
   - Follow the instructions to create your bot
   - Copy the bot token (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

2. **Get Your Chat ID**:
   - Search for `@userinfobot` on Telegram
   - Start a chat and it will show your Chat ID
   - Copy the numeric ID

3. **Add Bot to Channel** (Optional):
   - If you want notifications in a channel, add your bot as an admin

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
TELEGRAM_CHANNEL_URL=https://t.me/SkillsNova
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 🚀 Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Vercel](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Configure environment variables:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `TELEGRAM_CHANNEL_URL`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Variables on Vercel

After deploying, add environment variables in Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following:
   - `TELEGRAM_BOT_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `TELEGRAM_CHANNEL_URL`
4. Redeploy the project

## 📁 Project Structure

```
skillsnova/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── lead/
│   │   │       └── route.ts      # API endpoint for lead submission
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout with SEO
│   │   └── page.tsx              # Main page
│   ├── components/
│   │   ├── Button.tsx            # Reusable button component
│   │   ├── CourseCard.tsx        # Course card component
│   │   ├── CoursesSection.tsx    # Courses section
│   │   ├── FAQSection.tsx        # FAQ section
│   │   ├── Footer.tsx            # Footer component
│   │   ├── GuaranteeSection.tsx  # Guarantee section
│   │   ├── HeroSection.tsx       # Hero section
│   │   ├── HowItWorksSection.tsx # How it works section
│   │   ├── LeadForm.tsx          # Lead capture form
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── TestimonialsSection.tsx # Testimonials section
│   │   └── WhyUsSection.tsx      # Why us section
│   ├── lib/
│   │   └── telegram.ts           # Telegram API utilities
│   └── types/
│       └── index.ts              # TypeScript types
├── public/
│   └── (static assets)
├── .env.example                  # Environment variables template
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── tailwind.config.js            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
theme: {
  extend: {
    colors: {
      primary: { /* ... */ },
      accent: { /* ... */ },
      dark: { /* ... */ },
    },
  },
}
```

### Courses

Edit `src/components/CoursesSection.tsx` to modify course data:

```ts
const courses: Course[] = [
  {
    id: 'course-id',
    title: 'Course Name',
    price: 999,
    // ...
  },
];
```

### Content

All text content can be edited directly in the component files.

## 📱 Telegram Integration

### How It Works

1. User clicks "Enroll via Telegram" button
2. Opens Telegram with prefilled message
3. User can also fill out lead form on website
4. Form data is sent to Telegram bot
5. User is redirected to Telegram for payment

### API Endpoint

The `/api/lead` endpoint:
- Validates form data
- Sends formatted message to Telegram
- Returns redirect URL for Telegram

## 🔒 Security

- Environment variables are server-side only
- Form validation on both client and server
- HTTPS enforced on Vercel
- No sensitive data exposed to client

## 📊 Performance

- Optimized images and assets
- Code splitting enabled
- Server-side rendering where applicable
- Minimal JavaScript bundle size

## 🐛 Troubleshooting

### Telegram Bot Not Receiving Messages

1. Verify bot token is correct
2. Check chat ID is numeric
3. Ensure bot is not blocked
4. Check Vercel function logs for errors

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Support

For support, join our Telegram channel: [t.me/SkillsNova](https://t.me/SkillsNova)

---

Built with ❤️ by SkillsNova

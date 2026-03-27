# Vercel Deployment Guide

This guide will walk you through deploying SkillsNova to Vercel.

## Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/skillsnova)

## Step-by-Step Deployment

### Step 1: Prepare Your Repository

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Push to GitHub/GitLab/Bitbucket:
```bash
git remote add origin https://github.com/yourusername/skillsnova.git
git push -u origin main
```

### Step 2: Connect to Vercel

#### Option A: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Click "Add New Project"
4. Select your Git provider
5. Choose your repository
6. Click "Import"

#### Option B: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to your Vercel account
vercel login

# Link your project
vercel link

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Step 3: Configure Environment Variables

In the Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

| Name | Value | Environment |
|------|-------|-------------|
| `TELEGRAM_BOT_TOKEN` | Your bot token from @BotFather | Production, Preview, Development |
| `TELEGRAM_CHAT_ID` | Your chat ID from @userinfobot | Production, Preview, Development |
| `TELEGRAM_CHANNEL_URL` | https://t.me/SkillsNova | Production, Preview, Development |

### Step 4: Build Settings

Vercel auto-detects Next.js. Default settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### Step 5: Deploy

Click "Deploy" and wait for the build to complete.

Your site will be live at:
- Production: `https://your-project.vercel.app`
- Preview: `https://your-project-git-branch.vercel.app`

## Custom Domain

1. Go to project settings → "Domains"
2. Add your custom domain
3. Configure DNS records as instructed:
   - **Type**: A or CNAME
   - **Name**: @ or www
   - **Value**: Provided by Vercel

## Environment Variables Reference

```env
# Required
TELEGRAM_BOT_TOKEN=123456789:ABCdefGHIjklMNOpqrsTUVwxyz
TELEGRAM_CHAT_ID=123456789

# Optional
TELEGRAM_CHANNEL_URL=https://t.me/SkillsNova
```

## Getting Telegram Credentials

### Bot Token

1. Open Telegram and search for `@BotFather`
2. Send `/newbot`
3. Choose a name for your bot
4. Choose a username for your bot
5. Copy the token provided

### Chat ID

1. Search for `@userinfobot` on Telegram
2. Start the bot
3. It will reply with your Chat ID

### Alternative: Get Channel ID

1. Add your bot to your channel as admin
2. Send a message in the channel
3. Use this API to get channel ID:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates
```

## Monitoring

### View Logs

```bash
# Real-time logs
vercel logs

# Production logs
vercel logs --prod
```

### Vercel Dashboard

- **Analytics**: View traffic and performance
- **Logs**: Check function logs
- **Deployments**: View deployment history

## Performance Optimization

### Enable Vercel Analytics

Add to `src/app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

Install:
```bash
npm install @vercel/analytics
```

### Enable Vercel Speed Insights

```tsx
import { SpeedInsights } from '@vercel/speed-insights/next';
```

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Run `npm run build` locally to reproduce
3. Ensure all environment variables are set

### API Functions Not Working

1. Verify environment variables are set
2. Check function logs
3. Ensure API route is correctly configured

### Telegram Bot Not Receiving Data

1. Verify bot token is correct
2. Check bot is not blocked
3. Verify chat ID is correct format
4. Check Vercel function logs for errors

## Continuous Deployment

Vercel automatically deploys on every push to your repository:

- **main branch** → Production deployment
- **Other branches** → Preview deployment

## Pricing

- **Hobby**: Free for personal projects
- **Pro**: $20/month for commercial projects
- **Enterprise**: Custom pricing

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)
- [Next.js Documentation](https://nextjs.org/docs)

---

Need help? Join our Telegram: [t.me/SkillsNova](https://t.me/SkillsNova)

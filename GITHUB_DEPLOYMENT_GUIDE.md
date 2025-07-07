# 🚀 Complete GitHub & Cloudflare Deployment Guide

## 📋 Prerequisites Checklist

- [ ] GitHub account (ShayneIsMagic)
- [ ] Cloudflare account (shayne@devpipeline.com)
- [ ] All website files ready in `/Users/shayneroy/Downloads/hooley-custom-homes-main/`

---

## 🔧 Step 1: Create GitHub Repository

### 1.1 Go to GitHub
- Visit: [github.com](https://github.com)
- Login with your account: **ShayneIsMagic**

### 1.2 Create New Repository
- Click **"New repository"** (green button, top right)
- Fill in the details:
  ```
  Repository name: hooley-custom-homes-website
  Description: Hooley Custom Homes LLC - Custom Home Builder Website
  Visibility: Public (or Private)
  ✅ Add a README file: NO (we already have one)
  ✅ Add .gitignore: NO (we already have one)
  ✅ Choose a license: NO (we already have one)
  ```
- Click **"Create repository"**

### 1.3 Copy Repository URL
- Your repository URL will be: `https://github.com/ShayneIsMagic/hooley-custom-homes-website`

---

## 📤 Step 2: Upload Code to GitHub

### 2.1 Open Terminal
- Open Terminal on your Mac
- Navigate to your project folder:
  ```bash
  cd /Users/shayneroy/Downloads/hooley-custom-homes-main
  ```

### 2.2 Initialize Git (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Hooley Custom Homes website - Complete responsive website with contact form, project showcase, and SEO optimization"
git branch -M main
```

### 2.3 Connect to GitHub Repository
```bash
git remote add origin https://github.com/ShayneIsMagic/hooley-custom-homes-website.git
git push -u origin main
```

### 2.4 Verify Upload
- Go to: `https://github.com/ShayneIsMagic/hooley-custom-homes-website`
- You should see all your files uploaded

---

## 🌐 Step 3: Deploy to Cloudflare Pages

### 3.1 Login to Cloudflare
- Visit: [dash.cloudflare.com](https://dash.cloudflare.com)
- Login with: **shayne@devpipeline.com**

### 3.2 Navigate to Pages
- Click **"Pages"** in the left sidebar
- You should see your existing projects

### 3.3 Create New Project
- Click **"Create a project"**
- Select **"Connect to Git"**

### 3.4 Connect GitHub Repository
- Choose **GitHub** as your Git provider
- Authorize Cloudflare to access your GitHub account
- Select your repository: `ShayneIsMagic/hooley-custom-homes-website`
- Click **"Begin setup"**

### 3.5 Configure Build Settings
```
Project name: hooley-custom-homes
Production branch: main
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: / (leave empty)
```

### 3.6 Environment Variables (Optional)
```
NODE_VERSION: 18
```

### 3.7 Deploy
- Click **"Save and Deploy"**
- Cloudflare will automatically:
  - Clone your repository
  - Install dependencies
  - Run the build command
  - Deploy your site

---

## 🌍 Step 4: Custom Domain Setup (Optional)

### 4.1 Add Custom Domain
- Go to your project settings in Cloudflare Pages
- Click **"Custom domains"**
- Add your domain: `hooleycustomhomes.com`

### 4.2 DNS Configuration
- If your domain is already on Cloudflare:
  - Add the CNAME record automatically
- If not on Cloudflare:
  - Add CNAME: `hooleycustomhomes.com` → `hooley-custom-homes.pages.dev`
  - Or transfer domain to Cloudflare for easier management

---

## ✅ Step 5: Verify Deployment

### 5.1 Check Your Site
- **Cloudflare subdomain**: `https://hooley-custom-homes.pages.dev`
- **Custom domain** (if set up): `https://hooleycustomhomes.com`

### 5.2 Test All Features
- [ ] Homepage loads correctly
- [ ] All pages are accessible (About, Services, Projects, Contact)
- [ ] Contact form works (opens email client)
- [ ] Images display properly
- [ ] Social media links work
- [ ] Mobile responsive design

### 5.3 Contact Form Test
- Go to Contact page
- Fill out the form
- Click "Send Message"
- Should open email client with pre-filled content to:
  - nate@hooleycustomhomes.com
  - hooleydrywall@gmail.com

---

## 🔄 Step 6: Future Updates

### 6.1 Making Changes
1. **Edit your code locally**
2. **Test with**: `npm run dev`
3. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```
4. **Cloudflare automatically redeploys**

### 6.2 Rollback (if needed)
- Go to your project in Cloudflare Pages
- Click on **"Deployments"**
- Find a previous successful deployment
- Click **"Redeploy"**

---

## 📊 Step 7: Monitoring & Analytics

### 7.1 Cloudflare Analytics
- **URL**: `https://dash.cloudflare.com/pages`
- **Project**: `hooley-custom-homes`
- **Account**: shayne@devpipeline.com

### 7.2 Monitor
- **Analytics**: View visitor statistics
- **Deployments**: See build history and status
- **Functions**: Monitor serverless functions (if used)
- **Logs**: Check build and runtime logs

---

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Cloudflare Dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version (18+)

2. **Assets Not Loading**
   - Check file paths in your code
   - Ensure assets are in the `public/` directory
   - Verify build output directory is `dist`

3. **Contact Form Issues**
   - Test locally first: `npm run dev`
   - Check browser console for errors
   - Verify email addresses are correct

### Build Commands for Testing
```bash
# Local development
npm run dev          # http://localhost:4321

# Production build test
npm run build        # Creates dist/ folder
npm run preview      # Preview production build

# Clean and rebuild
npm run clean        # Remove dist/ folder
npm run build        # Fresh build
```

---

## 📞 Support

### Cloudflare Support
- **Documentation**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Community**: [community.cloudflare.com](https://community.cloudflare.com)
- **Status**: [cloudflarestatus.com](https://cloudflarestatus.com)

### Project Support
- **Email**: info@hooleycustomhomes.com
- **Phone**: (435) 469-2059

---

## 🎯 Quick Reference

### Important URLs
- **GitHub Repository**: `https://github.com/ShayneIsMagic/hooley-custom-homes-website`
- **Cloudflare Dashboard**: `https://dash.cloudflare.com/pages`
- **Your Site**: `
`

### Build Settings
- **Framework**: Astro
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18

### Contact Information
- **Phone**: (435) 469-2059
- **Email**: info@hooleycustomhomes.com
- **Social Media**: LinkedIn, Instagram, Facebook

---

## ✅ Final Checklist

- [ ] GitHub repository created
- [ ] Code uploaded to GitHub
- [ ] Cloudflare Pages project created
- [ ] Build settings configured
- [ ] Site deployed successfully
- [ ] All pages working
- [ ] Contact form tested
- [ ] Custom domain configured (if desired)
- [ ] Analytics set up (if desired)

---

**🎉 Congratulations! Your Hooley Custom Homes website is now live and ready for business!** 
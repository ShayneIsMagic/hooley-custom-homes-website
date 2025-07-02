# Cloudflare Deployment Setup for Hooley Custom Homes

Since you already have a Cloudflare account (shayne@devpipeline.com) with multiple projects, here's how to deploy the Hooley Custom Homes website.

## 🚀 Quick Deployment Steps

### 1. Prepare Your GitHub Repository

First, create a new GitHub repository for the Hooley Custom Homes website:

```bash
# Create a new repository on GitHub
# Repository name: hooley-custom-homes-website
# Description: Hooley Custom Homes LLC - Custom Home Builder Website
# Make it public or private (your choice)
```

### 2. Push Your Code to GitHub

```bash
# Initialize git and push to your new repository
git init
git add .
git commit -m "Initial commit: Hooley Custom Homes website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hooley-custom-homes-website.git
git push -u origin main
```

### 3. Deploy to Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Login with: shayne@devpipeline.com

2. **Navigate to Pages**
   - Click on **"Pages"** in the left sidebar
   - You should see your existing projects

3. **Create New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**

4. **Connect Repository**
   - Choose **GitHub** as your Git provider
   - Select your repository: `hooley-custom-homes-website`
   - Click **"Begin setup"**

5. **Configure Build Settings**
   ```
   Project name: hooley-custom-homes
   Production branch: main
   Framework preset: None
   Build command: npm run build
   Build output directory: dist
   Root directory: / (leave empty)
   ```

6. **Environment Variables** (Optional)
   ```
   NODE_VERSION: 18
   ```

7. **Deploy**
   - Click **"Save and Deploy"**
   - Cloudflare will build and deploy your site

## 🌐 Custom Domain Setup

### Option 1: Use Cloudflare Subdomain
- Your site will be available at: `hooley-custom-homes.pages.dev`
- This is free and works immediately

### Option 2: Custom Domain (Recommended)
1. **Add Custom Domain**
   - Go to your project settings
   - Click **"Custom domains"**
   - Add: `hooleycustomhomes.com`

2. **DNS Configuration**
   - If your domain is already on Cloudflare:
     - Add the CNAME record automatically
   - If not on Cloudflare:
     - Add CNAME: `hooleycustomhomes.com` → `hooley-custom-homes.pages.dev`
     - Or transfer domain to Cloudflare for easier management

## 📊 Project Management

### Accessing Your Project
- **URL**: `https://dash.cloudflare.com/pages`
- **Project**: `hooley-custom-homes`
- **Account**: shayne@devpipeline.com

### Monitoring
- **Analytics**: View visitor statistics
- **Deployments**: See build history and status
- **Functions**: Monitor serverless functions (if used)
- **Logs**: Check build and runtime logs

## 🔄 Updates and Maintenance

### Making Updates
1. **Edit your code locally**
2. **Test with**: `npm run dev`
3. **Commit and push to GitHub**:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```
4. **Cloudflare automatically redeploys**

### Rollback (if needed)
- Go to your project in Cloudflare Pages
- Click on **"Deployments"**
- Find a previous successful deployment
- Click **"Redeploy"**

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

## 📞 Support

### Cloudflare Support
- **Documentation**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
- **Community**: [community.cloudflare.com](https://community.cloudflare.com)
- **Status**: [cloudflarestatus.com](https://cloudflarestatus.com)

### Project Support
- **Email**: info@hooleycustomhomes.com
- **Phone**: (435) 469-2059

## 🎯 Next Steps

1. **Deploy the site** using the steps above
2. **Test all functionality**:
   - Homepage loads correctly
   - All pages are accessible
   - Contact form works
   - Images display properly
3. **Set up custom domain** (if desired)
4. **Configure analytics** (Google Analytics, etc.)
5. **Submit to search engines** (Google Search Console)

---

**Your Cloudflare Account**: shayne@devpipeline.com  
**Project Name**: hooley-custom-homes  
**Framework**: Astro  
**Build Command**: `npm run build`  
**Output Directory**: `dist` 
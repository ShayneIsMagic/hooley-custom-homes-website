# Deployment Guide - Cloudflare Pages

This guide will help you deploy the Hooley Custom Homes website to Cloudflare Pages.

## 🚀 Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **GitHub Account**: Ensure your code is in a GitHub repository
3. **Domain**: Have your domain ready (optional, Cloudflare provides a subdomain)

## 📋 Step-by-Step Deployment

### 1. Prepare Your Repository

Ensure your GitHub repository contains:
- ✅ All source code
- ✅ `package.json` with build scripts
- ✅ `astro.config.mjs` configured for production
- ✅ `README.md` with project documentation

### 2. Connect to Cloudflare Pages

1. **Login to Cloudflare Dashboard**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Pages** in the sidebar

2. **Create a New Project**
   - Click **"Create a project"**
   - Select **"Connect to Git"**

3. **Connect Your Repository**
   - Choose **GitHub** as your Git provider
   - Authorize Cloudflare to access your GitHub account
   - Select your repository: `hooleycustomhomes/website`

### 3. Configure Build Settings

Set the following build configuration:

```
Project name: hooley-custom-homes
Production branch: main
Framework preset: None
Build command: npm run build
Build output directory: dist
Root directory: / (leave empty)
```

### 4. Environment Variables (Optional)

If you need any environment variables, add them in the **Environment variables** section:

```
NODE_VERSION: 18
```

### 5. Deploy

1. Click **"Save and Deploy"**
2. Cloudflare will automatically:
   - Clone your repository
   - Install dependencies
   - Run the build command
   - Deploy your site

### 6. Custom Domain (Optional)

1. **Add Custom Domain**
   - Go to your project settings
   - Click **"Custom domains"**
   - Add your domain: `hooleycustomhomes.com`

2. **DNS Configuration**
   - Cloudflare will provide DNS records
   - Add them to your domain registrar
   - Or transfer your domain to Cloudflare for easier management

## 🔄 Continuous Deployment

Once connected, Cloudflare Pages will automatically:
- Deploy on every push to the `main` branch
- Create preview deployments for pull requests
- Provide unique URLs for each deployment

## 📊 Monitoring

Monitor your deployment in the Cloudflare Dashboard:
- **Analytics**: View visitor statistics
- **Functions**: Monitor serverless functions (if used)
- **Logs**: Check build and runtime logs

## 🛠️ Troubleshooting

### Common Issues

1. **Build Fails**
   - Check build logs in Cloudflare Dashboard
   - Ensure all dependencies are in `package.json`
   - Verify Node.js version compatibility

2. **Assets Not Loading**
   - Check file paths in your code
   - Ensure assets are in the `public/` directory
   - Verify build output directory is correct

3. **404 Errors**
   - Check if your Astro configuration is correct
   - Verify all pages are in the `src/pages/` directory
   - Ensure proper routing configuration

### Build Commands

```bash
# Local testing
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build

# Deployment
npm run deploy       # Build for deployment
```

## 🔧 Post-Deployment

### 1. Test Your Site
- Visit your deployed URL
- Test all pages and functionality
- Check contact form
- Verify images load correctly

### 2. SEO Setup
- Submit your sitemap to search engines
- Set up Google Analytics (if needed)
- Configure Google Search Console

### 3. Performance Optimization
- Enable Cloudflare's performance features
- Configure caching rules
- Optimize images if needed

## 📞 Support

If you encounter issues:
1. Check Cloudflare's documentation
2. Review build logs in the dashboard
3. Contact Cloudflare support
4. Check the project's README.md for troubleshooting

## 🔄 Updates

To update your website:
1. Make changes to your code
2. Commit and push to GitHub
3. Cloudflare will automatically redeploy
4. Monitor the deployment in the dashboard

---

**Note**: This deployment guide assumes you're using the standard Astro configuration. If you've made custom changes, you may need to adjust the build settings accordingly. 
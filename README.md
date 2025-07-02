# Hooley Custom Homes LLC Website

A modern, responsive website for Hooley Custom Homes LLC - a premier custom home builder serving Sanpete & Juab County, Utah.

## 🏠 About

Hooley Custom Homes LLC specializes in:
- Custom Home Building
- Renovations & Remodels
- Home Additions
- Income Properties
- Custom Features & Finishes

## 🚀 Features

- **Responsive Design**: Optimized for all devices
- **Modern UI**: Clean, professional design
- **Fast Performance**: Built with Astro for optimal speed
- **SEO Optimized**: Proper meta tags and structured data
- **Contact Integration**: Email form with automatic forwarding
- **Project Showcase**: Beautiful gallery of completed projects
- **Service Information**: Detailed service offerings

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) - Static Site Generator
- **Styling**: CSS3 with custom design system
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Montserrat)
- **Deployment**: Cloudflare Pages

## 📁 Project Structure

```
hooley-custom-homes-main/
├── public/
│   ├── images/          # Project images and assets
│   ├── js/             # JavaScript files
│   └── styles/         # CSS files
├── src/
│   ├── components/     # Reusable components
│   ├── data/          # Data files and metadata
│   ├── layouts/       # Page layouts
│   └── pages/         # Astro pages
├── astro.config.mjs   # Astro configuration
└── package.json       # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/hooleycustomhomes/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run clean` - Clean build directory
- `npm run deploy` - Build for deployment

## 🌐 Deployment

### Cloudflare Pages

1. **Connect Repository**
   - Go to Cloudflare Dashboard
   - Navigate to Pages
   - Connect your GitHub repository

2. **Build Settings**
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: 18

3. **Environment Variables** (if needed)
   - Add any required environment variables in Cloudflare Pages settings

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to hosting**
   Upload the contents of the `dist/` folder to your web server

## 📧 Contact Form

The contact form automatically sends emails to:
- nate@hooleycustomhomes.com
- hooleydrywall@gmail.com

## 🔧 Customization

### Adding New Projects

1. Add images to `public/images/`
2. Update `src/data/project-metadata.js` with project information
3. Images will automatically appear in the projects section

### Updating Content

- **Pages**: Edit files in `src/pages/`
- **Components**: Modify files in `src/components/`
- **Styling**: Update `public/styles/main.css`
- **Data**: Edit `src/data/project-metadata.js`

## 📱 Contact Information

- **Phone**: (435) 469-2059
- **Email**: info@hooleycustomhomes.com
- **Location**: Sanpete County, Utah
- **Service Areas**: Sanpete & Juab County

## 🔗 Social Media

- **LinkedIn**: [Hooley Custom Homes](https://www.linkedin.com/company/hooley-custom-homes/)
- **Instagram**: [@hooleycustomhomes](https://www.instagram.com/hooleycustomhomes)
- **Facebook**: [Hooley Custom Homes](https://www.facebook.com/drywallcontractor)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support or questions about the website, contact:
- **Email**: info@hooleycustomhomes.com
- **Phone**: (435) 469-2059

---

Built with ❤️ for Hooley Custom Homes LLC 
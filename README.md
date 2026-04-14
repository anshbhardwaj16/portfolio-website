# Modern Animated Portfolio Website

A stunning, fully responsive portfolio website built with React and Framer Motion. Features smooth animations, interactive elements, and a modern design perfect for showcasing your work.

## ✨ Features

- **Smooth Animations**: Framer Motion animations throughout for a polished feel
- **Moving Elements**: Floating emojis, animated blobs, and parallax effects
- **Responsive Design**: Fully mobile-friendly with adaptive layouts
- **Modern UI**: Gradient backgrounds, glassmorphism effects, and smooth transitions
- **Interactive Components**: Hover effects, form validation, and dynamic content
- **Performance Optimized**: Fast load times with Vite bundler
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📋 Sections

1. **Navigation** - Fixed header with smooth scroll navigation and mobile menu
2. **Hero** - Eye-catching landing section with CTA buttons and floating elements
3. **About** - Introduction with animated stats and floating avatar
4. **Projects** - Showcase of 6 featured projects with hover effects and tags
5. **Skills** - Technology stack organized by category with skill level bars
6. **Contact** - Contact information and interactive form

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Framer Motion 10** - Animation library
- **Vite 4** - Build tool and dev server
- **CSS3** - Styling with animations and gradients

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://127.0.0.1:3000`

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Customization

### Colors
Edit the CSS files to change the color scheme. The main colors are:
- Primary Red: `#ff6b6b`
- Secondary Red: `#ff8e72`
- Teal: `#a8edea`
- Pink: `#fed6e3`

### Content
Update the following files with your information:
- `src/components/About.jsx` - Your bio and stats
- `src/components/Projects.jsx` - Your projects
- `src/components/Skills.jsx` - Your skills
- `src/components/Contact.jsx` - Your contact details

### Logo
Change the logo text in `src/components/Navigation.jsx`

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🎭 Animation Features

- **Scroll Animations**: Sections animate as they come into view
- **Hover Effects**: Interactive elements respond to user interaction
- **Floating Elements**: Continuous floating animations in hero section
- **Progress Bars**: Animated skill level indicators
- **Form Transitions**: Smooth input interactions

## 🔧 File Structure

```
website/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── App.css
│   └── components/
│       ├── Navigation.jsx & Navigation.css
│       ├── Hero.jsx & Hero.css
│       ├── About.jsx & About.css
│       ├── Projects.jsx & Projects.css
│       ├── Skills.jsx & Skills.css
│       └── Contact.jsx & Contact.css
```

## 🚀 Deployment

Build for production:
```bash
npm run build
```

The build output will be in the `dist/` directory, ready to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## 🎯 Performance Tips

1. **Image Optimization**: Replace emoji placeholders with optimized images
2. **Code Splitting**: Vite automatically handles code splitting
3. **Animation Performance**: Use hardware acceleration (transform, opacity)
4. **Lazy Loading**: Consider implementing lazy loading for images

## 💡 Future Enhancements

- Dark/Light theme toggle
- Multi-language support
- Blog section
- Real project images and videos
- Email integration for contact form
- Analytics integration

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Your Name - Portfolio Website

## 🤝 Contributing

Feel free to fork, modify, and use this template for your own portfolio!

## 📞 Support

For issues, questions, or suggestions, please open an issue or contact directly.

---

**Built with ❤️ using React, Framer Motion, and Vite**

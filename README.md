# 🍰 Sri Lakshmi Bakery

A modern, responsive website for Sri Lakshmi Bakery built with **React** and **Vite**.

## ✨ Features

- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 📱 **Mobile-First** - Optimized mobile experience with hamburger navigation
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 🖼️ **Image Gallery** - Showcase your baked goods with an interactive gallery
- 📝 **Menu Management** - Organized categories (Cakes, Pastries, Snacks, Cookies & Bread)
- 💬 **Testimonials** - Display customer reviews and ratings
- 📧 **Contact Form** - Easy-to-use contact form for customer inquiries
- 🔗 **Social Integration** - WhatsApp order button and social media links

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.3.1
- **Styling**: CSS3 with responsive design
- **State Management**: React Hooks (useState)

## 📁 Project Structure

```
brew_bliss_cafe/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Gallery.jsx
│   │   ├── Hero.jsx
│   │   ├── Menu.jsx
│   │   ├── Navbar.jsx
│   │   └── Testimonials.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── assets/
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd brew_bliss_cafe
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The app will open at `http://localhost:5173` (or next available port)

### Build for Production

```bash
npm run build
```

Output will be generated in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📖 Components

### Navbar
- Responsive navigation with mobile-friendly hamburger menu
- Smooth scroll navigation to different sections
- Logo with bakery emoji

### Hero
- Eye-catching hero section with CTA buttons
- Background overlay for visual appeal
- Direct WhatsApp order integration

### About
- Business description and values
- Key statistics (customers, recipes, rating)
- Professional image section

### Menu
- Categorized products (Cakes, Pastries, Snacks, Cookies & Bread)
- Tab-based navigation for category switching
- Product cards with images, names, prices, and descriptions
- Fallback images for reliable display

### Gallery
- Beautiful grid layout of bakery items
- High-quality product images
- Hover effects for better interactivity

### Testimonials
- Customer reviews with ratings
- Auto-scrolling carousel (optional)
- Professional testimonial cards

### Contact
- Contact form with validation
- Form fields: Name, Phone, Email, Message
- Success/error feedback messages
- Professional styling

### Footer
- Social media links
- Business hours
- Quick links to sections
- Copyright information

## 🎨 Styling

All components use modular CSS files:
- `index.css` - Global styles and CSS variables
- Component-specific `.css` files for scoped styling
- Responsive breakpoints for mobile, tablet, and desktop
- Smooth transitions and hover effects

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints optimized for all screen sizes
- Touch-friendly buttons and interactive elements
- Optimized images for faster loading

## ✅ Features to Consider Adding

- Blog section for baking tips
- Online ordering system
- Customer login/accounts
- Email notifications
- Payment gateway integration
- SEO optimization
- Dark mode toggle

## 🔧 Configuration

### Vite Config
- React plugin enabled for JSX support
- Plugin: `@vitejs/plugin-react`
- Fast Refresh for instant updates during development

### Environment Variables
Create a `.env` file for sensitive data:
```
VITE_WHATSAPP_NUMBER=919876543210
```

## 📦 Dependencies

```json
{
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  }
}
```

## 📝 Development Workflow

1. Make changes in `src/` directory
2. Vite automatically refreshes the browser (Fast Refresh)
3. Check console for any errors
4. Build for production: `npm run build`
5. Test production build: `npm run preview`

## 🐛 Troubleshooting

**Blank white screen?**
- Ensure `index.html` exists in project root
- Verify `App.jsx` is properly exported as default
- Check browser console for JavaScript errors
- Clear browser cache and rebuild: `npm run build`

**Build fails?**
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Try `npm run build` once more

**Port already in use?**
- Vite automatically finds the next available port
- Or specify a port: `npm run dev -- --port 3000`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a pull request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues or questions, please open an issue in the repository or contact Sri Lakshmi Bakery directly.

---

Made with 🍰 and ❤️ by Sri Lakshmi Bakery

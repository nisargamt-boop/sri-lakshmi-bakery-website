# Sri Lakshmi Bakery Website

🍞 **Project Overview**

Sri Lakshmi Bakery Website is a modern, responsive bakery business website built with React (Vite). The site highlights the bakery's menu (prices in ₹), showcases real bakery photos in a gallery, includes customer testimonials, and provides a contact form with validation, WhatsApp ordering integration, and a Google Maps embed for the store location. The design focuses on clarity, accessibility, and mobile-first performance — ideal for portfolio or internship submission.

🌐 **Live Demo**

- Placeholder: https://your-live-demo-link.example.com

✨ **Features**

- Fully responsive layout (mobile-first)
- 12 menu items with prices in ₹
- 6 gallery images with responsive 3 → 2 → 1 grid
- Contact form with validation: name, email, phone, message
- WhatsApp order integration (quick order link)
- Hover animations and smooth transitions
- Success and error messages for user feedback
- Accessible alt text on all images

🧰 **Tech Stack**

- React (Vite)
- JavaScript (ES6+)
- CSS (vanilla)
- Vercel (recommended deployment)

📦 **Installation Steps**

1. Clone the repository

```bash
git clone <repo-url>
cd brew_bliss_cafe
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
# open http://localhost:5173 (or the port shown)
```

4. Build for production

```bash
npm run build
```

5. (Optional) Preview production build locally

```bash
npm run serve
```

📁 **Folder Structure**

```
src/
├─ components/
│  ├─ Navbar.jsx, Navbar.css
│  ├─ Hero.jsx, Hero.css
│  ├─ About.jsx, About.css
│  ├─ Menu.jsx, Menu.css
│  ├─ Gallery.jsx, Gallery.css
│  ├─ Testimonials.jsx, Testimonials.css
│  ├─ Contact.jsx, Contact.css
│  └─ Footer.jsx, Footer.css
├─ App.jsx
├─ main.jsx
└─ index.css
```

🔭 **Future Improvements**

- Add a simple CMS (Sanity / Contentful) to manage menu content and images
- Serve optimized responsive images (srcset / WebP / AVIF) for faster load
- Add automated tests (Jest + React Testing Library)
- Improve accessibility with an audit and corrective fixes
- Add email sending (serverless function) for contact form submissions

👤 **Author**

- Your Name — Developer
- Email: srilakshmibakery@gmail.com
- Notes: Prepared for internship submission — contact for questions or a walkthrough

---

If you'd like, I can also: deploy this to Vercel, add a screenshot gallery to this README, or include usage examples and contributor guidelines.

# 🚀 ProductZone

A modern, full-featured e-commerce platform built with Next.js 16, Firebase Authentication, and Tailwind CSS. ProductZone offers a seamless shopping experience with dark mode support, user authentication, and a beautiful responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![Firebase](https://img.shields.io/badge/Firebase-12.8.0-orange?style=flat-square&logo=firebase)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.19-38bdf8?style=flat-square&logo=tailwind-css)

## ✨ Features

### 🎨 User Interface
- **Modern Landing Page** - Eye-catching hero section with features, services, testimonials, and newsletter
- **Dark/Light Mode** - Seamless theme switching with persistent preferences
- **Responsive Design** - Fully optimized for mobile, tablet, and desktop devices
- **Smooth Animations** - Hover effects, transitions, and interactive elements

### 🔐 Authentication
- **Email/Password Authentication** - Secure user registration and login
- **Google Sign-In** - One-click authentication with Google OAuth
- **Protected Routes** - Dashboard access restricted to authenticated users
- **Session Management** - Persistent login state across page refreshes
- **Toast Notifications** - Real-time feedback for all authentication actions

### 🛍️ E-Commerce Features
- **Product Catalog** - Browse through curated digital products and services
- **Advanced Search** - Real-time search by product name and description
- **Category Filtering** - Filter products by category (UI Kit, Analytics, Design, etc.)
- **Smart Sorting** - Sort by price, rating, popularity, or newest first
- **Product Details** - Comprehensive product pages with images, ratings, and features
- **Related Products** - Smart recommendations based on product category
- **Shopping Cart** - Add items with quantity selection

### 👤 User Dashboard
- **Personalized Welcome** - Display user's name, email, and profile photo
- **Statistics Cards** - Overview of key metrics and activities
- **Activity Charts** - Visual representation of user data
- **Transaction History** - Complete order and payment records
- **Quick Actions** - Easy access to common tasks

## 🛠️ Tech Stack

### Frontend
- **Next.js 16.1.2** - React framework with App Router
- **React 19.2.3** - UI library with latest features
- **Tailwind CSS 3.4.19** - Utility-first CSS framework
- **DaisyUI 5.5.14** - Tailwind CSS component library

### Backend & Services
- **Firebase 12.8.0** - Authentication and backend services
- **Firebase Auth** - Email/password and Google OAuth authentication

### Additional Libraries
- **react-hot-toast 2.6.0** - Beautiful toast notifications
- **Material Symbols** - Google's icon library

## 📁 Project Structure

```
productzone/
├── src/
│   ├── app/
│   │   ├── dashboard/          # Protected dashboard pages
│   │   ├── items/              # Product catalog
│   │   │   └── [id]/          # Dynamic product details
│   │   ├── login/             # Login page
│   │   ├── register/          # Registration page
│   │   ├── layout.js          # Root layout with providers
│   │   ├── page.js            # Landing page
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Navbar.js          # Navigation with auth state
│   │   ├── Hero.js            # Landing hero section
│   │   ├── Features.js        # Features showcase
│   │   ├── About.js           # About section
│   │   ├── Services.js        # Services section
│   │   ├── Testimonials.js    # Customer testimonials
│   │   ├── Newsletter.js      # Newsletter signup
│   │   ├── Footer.js          # Footer component
│   │   ├── ThemeToggle.js     # Dark/light mode toggle
│   │   └── ProtectedRoute.js  # Route protection HOC
│   ├── contexts/
│   │   └── AuthContext.js     # Global auth state management
│   ├── lib/
│   │   └── firebase.js        # Firebase configuration
│   └── data/
│       └── items.json         # Product catalog data
├── public/                     # Static assets
├── .env.local                 # Environment variables (not in git)
├── vercel.json                # Vercel deployment config
├── tailwind.config.js         # Tailwind configuration
├── next.config.mjs            # Next.js configuration
└── package.json               # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Firebase project with Authentication enabled

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/productzone.git
cd productzone
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

4. **Configure Firebase**
   - Go to [Firebase Console](https://console.firebase.google.com)
   - Create a new project or use existing one
   - Enable Authentication → Email/Password and Google providers
   - Add `localhost:3000` to authorized domains

5. **Run the development server**
```bash
npm run dev
```

6. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Usage

### For Users
1. **Browse Products** - Visit the Items page to explore the catalog
2. **Search & Filter** - Use search bar and filters to find specific products
3. **View Details** - Click "Details" on any product for more information
4. **Sign Up** - Create an account with email or Google
5. **Access Dashboard** - View your personalized dashboard after login

### For Developers
```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server
```

## 🎨 Customization

### Theme Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#0f4d5c',    // Main brand color
  accent: '#E67E6B',     // Accent color
}
```

### Product Data
Edit `src/data/items.json` to add/modify products:
```json
{
  "id": "1",
  "name": "Product Name",
  "description": "Product description",
  "price": 49,
  "category": "Category",
  "image": "image-url",
  "rating": 4.9,
  "reviews": 128
}
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Ready for deployment"
git push
```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables from `.env.local`
   - Click Deploy

3. **Update Firebase**
   - Add your Vercel domain to Firebase authorized domains

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📱 Pages Overview

| Page | Route | Description | Auth Required |
|------|-------|-------------|---------------|
| Landing | `/` | Home page with features | No |
| Items | `/items` | Product catalog | No |
| Product Details | `/items/[id]` | Individual product page | No |
| Login | `/login` | User login | No |
| Register | `/register` | User registration | No |
| Dashboard | `/dashboard` | User dashboard | Yes |

## 🔒 Security Features

- Environment variables for sensitive data
- Firebase security rules
- Protected routes with authentication checks
- Secure password handling
- HTTPS enforcement in production
- XSS protection with React
- CSRF protection

## 🐛 Troubleshooting

### Firebase Auth Not Working
- Verify environment variables are set correctly
- Check Firebase Console for enabled auth providers
- Ensure domain is added to authorized domains

### Dark Mode Not Persisting
- Check browser localStorage is enabled
- Clear browser cache and try again

### Build Errors
- Delete `.next` folder and `node_modules`
- Run `npm install` again
- Check Node.js version (18+ required)

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/masumBillah-1)
- Email: masumak203@gmail.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [DaisyUI](https://daisyui.com/) - Component library
- [Vercel](https://vercel.com/) - Deployment platform

## 📞 Support

For support, email your.email@example.com or open an issue in the GitHub repository.

---

Made with ❤️ using Next.js and Firebase

# Aryloft 🛍️

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://react.dev/)
[![Firebase](https://img.shields.io/badge/Firebase-9.22.0-FFCA28?logo=firebase)](https://firebase.google.com/)
[![Redux](https://img.shields.io/badge/Redux-4.2.1-764ABC?logo=redux)](https://redux.js.org/)

A modern e-commerce experience with seamless Google authentication and state management. Built with ❤️ using cutting-edge technologies.

![Aryloft Demo](https://github.com/user-attachments/assets/b188c298-4898-447f-9a84-b424e196e7df)  
*Homepage showcasing featured products*

---

## 🌟 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Quick Start](#-quick-start)
- [Project Structure](#-project-structure)
- [Demo](#-demo)
- [Contributing](#-contributing)
- [License](#-license)
- [Connect](#-connect)

---

## 🚀 Features

### 🔐 Authentication
![Google Sign-In](https://img.icons8.com/color/48/google-logo.png) Secure Google authentication powered by Firebase  
**One-click access** with real-time toast notifications

### 🛒 E-Commerce Core
- 📱 Responsive product grid
- 🛍️ Interactive shopping cart
- 🎨 Modern UI with Tailwind CSS
- 📦 Product cards with dynamic pricing
- 📱 Mobile-first design

### ⚡ State Management
![Redux](https://img.icons8.com/color/48/redux.png) Centralized store for:
- User sessions
- Cart items
- Product filters
- Application state

---

## 🛠️ Tech Stack

| Category        | Technologies                                                                                     |
|-----------------|--------------------------------------------------------------------------------------------------|
| **Core**        | ![React](https://img.icons8.com/color/30/react-native.png) React 18 • ![Redux](https://img.icons8.com/color/30/redux.png) Redux Toolkit |
| **Styling**     | ![Tailwind](https://img.icons8.com/color/30/tailwindcss.png) Tailwind CSS • CSS Modules          |
| **Services**    | ![Firebase](https://img.icons8.com/color/30/firebase.png) Firebase Auth • ![Toast](https://img.icons8.com/color/30/notification.png) React Toastify |
| **Routing**     | ![React Router](https://img.icons8.com/color/30/react-router.png) React Router 6                 |
| **Build**       | ![Vite](https://img.icons8.com/color/30/vite.png) Vite • PostCSS                                 |

---

## 📥 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/hack-09/Aryloft.git
cd Aryloft/frontend
npm install
```

### 2. Firebase Configuration
1. Create Firebase project at [console.firebase.google.com](https://console.firebase.google.com/)
2. Enable **Google Sign-In** in Authentication
3. Replace placeholder config in `firebase.config.js`:
```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  // ... add your config details
};
```

### 3. Launch Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser

---

## 📂 Project Structure

```arduino
frontend/
├── src
│   ├── api/            # Firebase service layer
│   ├── assets/         # Images & static files
│   ├── components/     # Reusable UI components
│   ├── pages/          # Route-based pages
│   ├── redux/          # State management
│   └── ...             # Configuration files
server/
├── server.js           # Mock backend API
```

---

## 🎥 Demo

| Homepage | Product View | Cart |
|----------|--------------|------|
| ![Home](https://github.com/user-attachments/assets/b188c298-4898-447f-9a84-b424e196e7df) | ![Products](https://github.com/user-attachments/assets/a2c5b013-3ecb-4c4d-8882-6f0db921d786) | ![Cart](https://github.com/user-attachments/assets/60fe7d87-7aa0-4f36-9a4a-4fed3e56daf9) |

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. 🍴 Fork the repository
2. 🌿 Create your feature branch:  
   `git checkout -b feature/AmazingFeature`
3. 💾 Commit changes:  
   `git commit -m 'Add some AmazingFeature'`
4. 🚀 Push to branch:  
   `git push origin feature/AmazingFeature`
5. 🔀 Open a Pull Request

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📬 Connect

**Priyanshu Kumar**  
[![GitHub](https://img.icons8.com/fluent/30/github.png)](https://github.com/hack-09) 
[![LinkedIn](https://img.icons8.com/color/30/linkedin.png)](https://linkedin.com/in/yourprofile) 
[![Email](https://img.icons8.com/color/30/gmail.png)](mailto:your.email@domain.com)

---

Made with ❤️ and ☕ by the Aryloft team. Happy shopping! 🛒
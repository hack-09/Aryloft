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

- **Frontend:** React, Redux, Tailwind CSS
- **Authentication:** Firebase (GoogleAuthProvider)
- **Routing:** React Router
- **Notifications:** React Toastify

## 📦 Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/aryloft.git
   cd aryloft
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Firebase Setup:**
   - Create a Firebase project [here](https://console.firebase.google.com/).
   - Enable Google Sign-In in the Authentication section.
   - Replace the Firebase config in `firebase.config.js` with your project credentials.

4. **Run the Application:**
   ```bash
   npm start
   ```

## 📂 Project Structure

```
aryloft/
├── src/
│   ├── components/
│   │   └── Login.js
│   ├── redux/
│   │   └── bazarSlice.js
│   ├── firebase.config.js
│   └── App.js
├── public/
├── package.json
└── README.md
```

## ⚡ Usage

- **Sign In:** Click on "Sign in with Google" to authenticate.
- **Sign Out:** Once signed in, click "Sign Out of Aryloft" to log out.

## 🎨 Screenshots

_Add screenshots here to showcase your UI._

## 📋 License

This project is licensed under the [MIT License](LICENSE).

## 🙌 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## 💬 Contact

- **Developer:** Priyanshu Kumar
- **GitHub:** [@yourusername](https://github.com/yourusername)

Happy Coding! 🚀


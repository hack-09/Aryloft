# Aryloft

Aryloft is a modern React application integrated with Firebase for seamless Google authentication. This project showcases user-friendly login and logout functionalities with a clean UI, powered by React, Redux, and React Router.

## 🚀 Features

- **Google Authentication:** Secure sign-in and sign-out using Firebase.
- **Redux Integration:** Efficient state management for user information.
- **Responsive UI:** Tailored for all screen sizes with a clean, intuitive design.
- **Toast Notifications:** Real-time feedback on login and logout actions.

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


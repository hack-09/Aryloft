// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import the Firebase Authentication module

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjILM3zvU_0fss3LcVjp24Ic2MG7v35c0",
  authDomain: "aryloft-9f543.firebaseapp.com",
  projectId: "aryloft-9f543",
  storageBucket: "aryloft-9f543.firebasestorage.app",
  messagingSenderId: "289414078848",
  appId: "1:289414078848:web:f3add49e30d90e6aac2165",
  measurementId: "G-ZW7QELJX8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Export initialized services
export { app, analytics, auth };

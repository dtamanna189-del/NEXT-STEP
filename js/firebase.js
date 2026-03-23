// Import Firebase (CDN modules)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your Firebase config (PASTE YOURS HERE)
const firebaseConfig = {
    apiKey: "AIzaSyD8JGqdbboDIJ_jM_ZnQ3ugizewF0UYm34",
    authDomain: "next-step-e32a4.firebaseapp.com",
    projectId: "next-step-e32a4",
    storageBucket: "next-step-e32a4.firebasestorage.app",
    messagingSenderId: "281712986883",
    appId: "1:281712986883:web:3313010e16973db8c47736"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export for use
export const auth = getAuth(app);
export const db = getFirestore(app);
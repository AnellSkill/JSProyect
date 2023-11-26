        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-analytics.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
          apiKey: "AIzaSyAJuVFAX37DItkfas7ckMlkU-Zw9yF6uEg",
          authDomain: "stripe-b8479.firebaseapp.com",
          projectId: "stripe-b8479",
          storageBucket: "stripe-b8479.appspot.com",
          messagingSenderId: "449978367263",
          appId: "1:449978367263:web:28f64c6b9176bb2405442a",
          measurementId: "G-H90K5WPHDP"
        };
      
        // Initialize Firebase
         export const app = initializeApp(firebaseConfig);
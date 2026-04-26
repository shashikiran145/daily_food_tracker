// // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// import { initializeApp, getApps, getApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAdyvzPBvmSL0xuC--fF3MkBj_ZDDtf4EA",
//   authDomain: "dailyfoodtracker-84b86.firebaseapp.com",
//   projectId: "dailyfoodtracker-84b86",
//   storageBucket: "dailyfoodtracker-84b86.firebasestorage.app",
//   messagingSenderId: "1051463307762",
//   appId: "1:1051463307762:web:74bdb590570f3dca2e5b6b",
//   measurementId: "G-WS9NZZTBMK"
// };

// // Initialize Firebase
// export const app =
//   getApps().length === 0
//     ? initializeApp(firebaseConfig)
//     : getApp();


import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

export const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();
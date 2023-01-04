// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcFNswo6GCVM0JN2HA5V-TczoIklh5_Lc",
  authDomain: "plx-exchange.firebaseapp.com",
  projectId: "plx-exchange",
  storageBucket: "plx-exchange.appspot.com",
  messagingSenderId: "273209816640",
  appId: "1:273209816640:web:e61a526fb5cff5f34711a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

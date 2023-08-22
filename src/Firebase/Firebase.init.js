// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyD4z9HxhVGgNedHY-f8lQOdp3sLVZToVsM",
  authDomain: "car-showroom-520ff.firebaseapp.com",
  projectId: "car-showroom-520ff",
  storageBucket: "car-showroom-520ff.appspot.com",
  messagingSenderId: "185041252292",
  appId: "1:185041252292:web:cb7319f7faaaf77e92fe91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
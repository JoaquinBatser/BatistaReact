import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKz6DCraCJNJkS1eIQgeUpYawvFlgWzaY",
  authDomain: "react-coderhouse-bd45d.firebaseapp.com",
  databaseURL: "https://react-coderhouse-bd45d-default-rtdb.firebaseio.com",
  projectId: "react-coderhouse-bd45d",
  storageBucket: "react-coderhouse-bd45d.appspot.com",
  messagingSenderId: "448683832625",
  appId: "1:448683832625:web:9df2a693b81b7738fd2c10"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

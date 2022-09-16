import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA5ERCfdlPVQPZ7wNZSCroARKNIiIjdaTU",
  authDomain: "e-commerce-react-e3b9d.firebaseapp.com",
  projectId: "e-commerce-react-e3b9d",
  storageBucket: "e-commerce-react-e3b9d.appspot.com",
  messagingSenderId: "752474691400",
  appId: "1:752474691400:web:93236dbf36bda7aa57457d",
  measurementId: "G-D514CEYMKE"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // comentado mientras se aprende REACT
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

reportWebVitals();

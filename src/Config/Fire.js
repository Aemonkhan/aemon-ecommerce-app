import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyBmLxPhPM02QqXEwyYca_pbZkBbA9nHlIg",
  authDomain: "ecommerce-e3909.firebaseapp.com",
  projectId: "ecommerce-e3909",
  storageBucket: "ecommerce-e3909.appspot.com",
  messagingSenderId: "1088695496697",
  appId: "1:1088695496697:web:20136229aea72251fe1728",
  measurementId: "G-MR7Z1TC910"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
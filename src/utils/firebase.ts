// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcsruKdgZoOMOxNVLYOcgVMQ_Vhzjaoeo",
  authDomain: "cinemind-450ec.firebaseapp.com",
  projectId: "cinemind-450ec",
  storageBucket: "cinemind-450ec.appspot.com",
  messagingSenderId: "544905678819",
  appId: "1:544905678819:web:a315662785e35e23e25ad6",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

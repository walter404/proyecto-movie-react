import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB24v_xXvNCo9Vmb9XzWG_mTwb80k3-lt4",
  authDomain: "ecommerce-movie.firebaseapp.com",
  projectId: "ecommerce-movie",
  storageBucket: "ecommerce-movie.appspot.com",
  messagingSenderId: "154792135541",
  appId: "1:154792135541:web:112650f3c2a1e35a93613c"
};


const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}
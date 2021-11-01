import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

// firebase initialise

const firebaseInit = () => {
  initializeApp(firebaseConfig);
};

export default firebaseInit;

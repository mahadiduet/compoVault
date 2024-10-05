import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW3ZGFIPFujQeZ7GIcXqYhBUgMX6ytSnI",
  authDomain: "compovault.firebaseapp.com",
  projectId: "compovault",
  storageBucket: "compovault.appspot.com",
  messagingSenderId: "226767148396",
  appId: "1:226767148396:web:6d38b2e8fc418b6f8f0f49"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
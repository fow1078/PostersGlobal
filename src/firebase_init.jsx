import { initializeApp  } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAOFZa5q6k-GRbx-hSE8bhX3KEkgEtuq6I",
  authDomain: "posterslocations-dd0f0.firebaseapp.com",
  projectId: "posterslocations",
  storageBucket: "posterslocations.appspot.com",
  messagingSenderId: "1014615418212",
  appId: "1:1014615418212:web:6b6d1dfeb5d7531d570671",
  measurementId: "G-MR7YVXYSK0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
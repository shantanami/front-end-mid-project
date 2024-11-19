// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfF1_-HrkvRxb7QBRO0g1HWk3E3Ma4X8I",
  authDomain: "front-end-mid-project.firebaseapp.com",
  databaseURL: "https://front-end-mid-project-default-rtdb.firebaseio.com",
  projectId: "front-end-mid-project",
  storageBucket: "front-end-mid-project.firebasestorage.app",
  messagingSenderId: "120044360664",
  appId: "1:120044360664:web:788777805be4b7f425d8ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };

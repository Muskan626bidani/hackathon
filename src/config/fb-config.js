// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBErjxjJfhL_0OKEk9bZDsTnVIfykdLgJ4",
	authDomain: "sih-project-a7b93.firebaseapp.com",
	projectId: "sih-project-a7b93",
	storageBucket: "sih-project-a7b93.appspot.com",
	messagingSenderId: "155599216566",
	appId: "1:155599216566:web:86c12b07b6d2f85c00eb17",
	measurementId: "G-G9YNBHQB3Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

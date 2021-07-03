import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyCxwIMjKT8g9kYa7I4knKdvb_oY8n-Iz5U",
	authDomain: "steve-admin-fbec6.firebaseapp.com",
	projectId: "steve-admin-fbec6",
	storageBucket: "steve-admin-fbec6.appspot.com",
	messagingSenderId: "78662837827",
	appId: "1:78662837827:web:4b0f071405d70313c796f6",
	measurementId: "G-J04Z7R077C",
};
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;

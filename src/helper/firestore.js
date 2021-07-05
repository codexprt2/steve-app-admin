import firebase from "../firebase";

console.log("firebase :: ", firebase);

var dbRef = () => firebase.firestore();

export default dbRef;

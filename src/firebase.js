import firebase from "firebase/app";
import "firebase/firestore";

const config = firebase.initializeApp({
    apiKey: "AIzaSyBRiFs2iBr4V3pEW5hPncvAMHh_Mx-hfnw",
    authDomain: "todoist-47a40.firebaseapp.com",
    databaseURL: "https://todoist-47a40.firebaseio.com",
    projectId: "todoist-47a40",
    storageBucket: "todoist-47a40.appspot.com",
    messagingSenderId: "694082722530",
    appId: "1:694082722530:web:23126e4a233c4f121adcbb"
});
export { config as firebase };

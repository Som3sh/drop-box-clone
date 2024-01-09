import {getApp , getApps , initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyA5R4jZ05rvPwMfVPrfjnJmgmsFoiI8wBs",
    authDomain: "dropbox-clone-c5711.firebaseapp.com",
    projectId: "dropbox-clone-c5711",
    storageBucket: "dropbox-clone-c5711.appspot.com",
    messagingSenderId: "347048633547",
    appId: "1:347048633547:web:6aa0b1658d63d71a86e74e"
  };

const app =  getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);


export {db , storage};
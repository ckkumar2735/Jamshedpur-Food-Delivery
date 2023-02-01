import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyCnnOXrzPB1XEIaXHe4-rgfAykGBmHp2eY",
  authDomain: "restaurantapp-98ddf.firebaseapp.com",
  databaseURL: "https://restaurantapp-98ddf-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-98ddf",
  storageBucket: "restaurantapp-98ddf.appspot.com",
  messagingSenderId: "636287466688",
  appId: "1:636287466688:web:9d985ac48fc868215b0125"
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
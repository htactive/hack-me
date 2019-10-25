
import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyA0OaYuo_iFz1_Hcx87reEgw2wnUE9xbTQ",
  authDomain: "challenge-hack.firebaseapp.com",
  databaseURL: "https://challenge-hack.firebaseio.com",
  projectId: "challenge-hack",
  storageBucket: "challenge-hack.appspot.com",
  messagingSenderId: "100865017892",
  appId: "1:100865017892:web:b7dfcc2a581aaf1985b0b1",
  measurementId: "G-ELTST0797D"
};
var fire = firebase.initializeApp(config);

export default fire;
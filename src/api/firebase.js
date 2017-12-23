import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAWfEb_U8tVs5ukZe9_hwdvIIe_6Av-d8c',
  authDomain: 'manna-deb1d.firebaseapp.com',
  databaseURL: 'https://manna-deb1d.firebaseio.com',
  projectId: 'manna-deb1d',
  storageBucket: 'manna-deb1d.appspot.com',
  messagingSenderId: '208419616390',
};

firebase.initializeApp(config);

export default firebase;

export const auth = firebase.auth();
export const db = firebase.database();

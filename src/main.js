// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import firebase from 'firebase';
import App from './App';
import router from './router';


Vue.config.productionTip = false;

let app;
const config = {
  apiKey: 'AIzaSyAWfEb_U8tVs5ukZe9_hwdvIIe_6Av-d8c',
  authDomain: 'manna-deb1d.firebaseapp.com',
  databaseURL: 'https://manna-deb1d.firebaseio.com',
  projectId: 'manna-deb1d',
  storageBucket: 'manna-deb1d.appspot.com',
  messagingSenderId: '208419616390',
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App },
    });
  }
});

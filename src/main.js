import Vue from 'vue'
import firebase from 'firebase';
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

let app = '';
var firebaseConfig = {
  apiKey: "AIzaSyC7kTJGUQf2GUsYFsnBssgv92I6Ujjrcpk",
  authDomain: "alphaleaf-uat.firebaseapp.com",
  databaseURL: "https://alphaleaf-uat.firebaseio.com",
  projectId: "alphaleaf-uat",
  storageBucket: "alphaleaf-uat.appspot.com",
  messagingSenderId: "648824447266",
  appId: "1:648824447266:web:b6c0bc2b083b943163c57b",
  measurementId: "G-MRR03DBTNR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      store,
      render: function (h) { return h(App) },
    }).$mount('#app')
  }
});


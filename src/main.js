import Vue from 'vue'
// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from 'firebase/app';
// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";
// // Add the Firebase products that you want to use
// import "firebase/auth";
// import "firebase/firestore";
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//let app = '';
// var firebaseConfig = {
//   apiKey: "AIzaSyC7kTJGUQf2GUsYFsnBssgv92I6Ujjrcpk",
//   authDomain: "alphaleaf-uat.firebaseapp.com",
//   databaseURL: "https://alphaleaf-uat.firebaseio.com",
//   projectId: "alphaleaf-uat",
//   storageBucket: "alphaleaf-uat.appspot.com",
//   messagingSenderId: "648824447266",
//   appId: "1:648824447266:web:b6c0bc2b083b943163c57b",
//   measurementId: "G-MRR03DBTNR"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// //firebase.analytics();

new Vue({
    router,
    store,
    render: function (h) { return h(App) },
  }).$mount('#app')

// firebase.auth().onAuthStateChanged(() => {
//   if (!app) {
//     /* eslint-disable no-new */
//     app = new Vue({
//       router,
//       store,
//       render: function (h) { return h(App) },
//     }).$mount('#app')
//   }
// });


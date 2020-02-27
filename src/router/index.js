import Vue from 'vue'
//import firebase from 'firebase';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  },
  {
    path: '/courses',
    name: 'courses',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Courses.vue')
    }
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Contact.vue')
    }
  },
  {
    path: '/enroll',
    name: 'enroll',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Enroll.vue')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  //const currentUser = firebase.auth().currentUser;
  //const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  //if (requiresAuth && !currentUser) next('login');
  //else next();
  next();

  // if (requiresAuth && !currentUser) next('login');
  // else if (store.getters.userAuth == true) next();
  // else next('login');
});


export default router

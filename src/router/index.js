import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';

import Hello from '@/components/Hello';
import TheLoginView from '@/components/TheLoginView/TheLoginView';
import TheSignUpView from '@/components/TheSignUpView/TheSignUpView';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login',
    },
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: TheLoginView,
    },
    {
      path: '/sign-up',
      name: 'SignUP',
      component: TheSignUpView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else if (!requiresAuth && currentUser) {
    next('hello');
  } else next();
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: 'shops',
      },
      {
        path: 'shops',
        name: 'Shops',
        component: () =>
          import(/* webpackChunkName: "shops" */ '../views/home/shops'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

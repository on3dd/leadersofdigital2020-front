import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/home';
import Profile from '@/views/profile';
import About from '@/views/about';
import Orders from '@/views/orders';
import Checkout from '@/views/checkout';
import Login from '@/views/login';
import Register from '@/views/register';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
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
      {
        path: 'shops/:id',
        name: 'Shops Id',
        component: () =>
          import(/* webpackChunkName: "shops" */ '../views/home/shops/id'),
      },
      {
        path: 'shops/:id/:category',
        name: 'Shops Id Category',
        component: () =>
          import(
            /* webpackChunkName: "shops" */ '../views/home/shops/id/category'
          ),
      },
      {
        path: 'shops/:id/:category/:item',
        name: 'Shops Id Category Item',
        component: () =>
          import(
            /* webpackChunkName: "shops" */ '../views/home/shops/id/category/item'
          ),
      },
      {
        path: 'products',
        name: 'Products',
        component: () =>
          import(/* webpackChunkName: "products" */ '../views/home/products'),
      },
    ],
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

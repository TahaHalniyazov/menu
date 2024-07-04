import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import MenuPage from '../views/MenuPage.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/menu-page', name: 'Menu-page', component: MenuPage }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

// router.js
import Vue from 'vue';
import Router from 'vue-router';
import Search from './Search.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', name:'home', component: Search },
      { path: '/search/:query?', name:'search', component: Search }
    ],
  });
}

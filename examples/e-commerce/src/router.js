import Vue from 'vue';
import Router from 'vue-router';
import Search from './Search.vue';

Vue.use(Router);

export function createRouter() {
  return new Router({
    routes: [
      { path: '/', name:'home', component: Search },
    ],
  });
}

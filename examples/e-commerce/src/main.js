// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import InstantSearch from 'vue-instantsearch';
import { createRouter } from './router';

Vue.use(InstantSearch);

const router = createRouter();

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: `
  <div id="app" class="container-fluid">
    <router-view />
  </div>`,
});

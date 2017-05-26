import Vue from 'vue';
import App from './App.vue';
import InstantSearch from 'vue-instantsearch';
import { createRouter } from './router';

Vue.use(InstantSearch);

export function createApp() {
  const router = createRouter();
  const app = new Vue({
    router,
    render: h => h(App),
  });
  return { app, router };
}

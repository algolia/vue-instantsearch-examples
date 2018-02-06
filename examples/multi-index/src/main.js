import Vue from 'vue';
import App from './App.vue';
import Plugin from 'vue-instantsearch';

Vue.use(Plugin);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  render: h => h(App),
});

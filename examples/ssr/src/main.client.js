import { createApp } from './main';

// client-specific bootstrapping logic...

const { app } = createApp();

// this assumes App.vue template root element has id="app"
app.$mount('#app');

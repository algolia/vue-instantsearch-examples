/* eslint-disable import/no-commonjs */
const resolve = require('path').resolve;

module.exports = {
  modulesDir: resolve(__dirname, '../../node_modules/'),
  head: {
    title: 'nuxt-instantsearch',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt integration with Vue InstantSearch',
      },
    ],
  },
  plugins: ['~/plugins/vue-instantsearch'],
};

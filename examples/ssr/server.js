/* eslint-disable import/no-commonjs */
const express = require('express');
const server = express();

const template = require('fs').readFileSync(
  './src/index.template.html',
  'utf-8'
);
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const { createBundleRenderer } = require('vue-server-renderer');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false, // recommended
  template, // (optional) page template
  clientManifest, // (optional) client build manifest
});

// Serve static assets from ./dist on the /dist route.
server.use('/dist', express.static('dist'));

// inside a server handler...
server.get('*', (req, res) => {
  const context = { url: req.url };
  // No need to pass an app here because it is auto-created by the
  // executing the bundle. Now our server is decoupled from our Vue app!
  renderer.renderToString(context, (err, html) => {
    if (err !== null) {
      if (err.code === 404) {
        res.status(404).end('Page not found');
      } else {
        res.status(500).end('Internal Server Error');
      }

      // eslint-disable-next-line no-console
      console.log(err);
    } else {
      res.end(html);
    }
  });
});

// eslint-disable-next-line no-console
console.log('Application is running on: http://localhost:8080');

server.listen('8080');

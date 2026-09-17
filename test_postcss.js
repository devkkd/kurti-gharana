const postcss = require('postcss');
const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, 'app/globals.css'), 'utf8');
const config = require('./postcss.config.js');

const plugins = Object.keys(config.plugins).map(pluginName => {
  return require(pluginName)(config.plugins[pluginName]);
});

postcss(plugins)
  .process(css, { from: path.join(__dirname, 'app/globals.css') })
  .then(result => {
    console.log('Result CSS length:', result.css.length);
    console.log('Has .relative:', result.css.includes('.relative'));
    console.log('Has .grid:', result.css.includes('.grid'));
    console.log('Has .text-center:', result.css.includes('.text-center'));
  })
  .catch(err => {
    console.error('PostCSS error:', err);
  });

const { WebpackPluginServe } = require('webpack-plugin-serve');

class UssrFrontend {
  constructor(opts) {
    if (!global.__USSR_OBSERVER__) {
      console.error('You forget use createUssrObserver!');
      console.log();
      console.log('Please, follow instruction:')
      console.log();
      console.log('import createUssrObserver from \'@rockpack/webpack-plugin-ussr-development\';');
      console.log();
      console.log('...');
      console.log();
      console.log('createUssrObserver();');
      console.log();
      process.exit(1);
    }

    const defaultOptions = {
      liveReload: false,
      hmr: false,
      historyFallback: false,
      open: false,
      waitForBuild: true
    }

    const onChanged = global.__USSR_OBSERVER__.frontendChanged;
    const onInit = global.__USSR_OBSERVER__.register;

    let first = true;

    this.server = new WebpackPluginServe(Object.assign({}, defaultOptions, opts));

    this.server.on('done', (stats, compiler) => {
      if (typeof onChanged === 'function') {
        if (!first) {
          onChanged(stats, compiler);
        }
      }
      first = false;
    });

    if (typeof onInit === 'function') {
      onInit(this.server);
    }

    return this.server;
  }
}

module.exports = UssrFrontend;

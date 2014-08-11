Package.describe({summary: "Simple API for GameDev News"});

Package.on_use(function (api) {

  api.use([
    'http-methods',
 ], ['client']);

  api.add_files([
    'lib/api.js'
  ], ['client']);

});
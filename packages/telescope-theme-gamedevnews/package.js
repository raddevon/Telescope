Package.describe({summary: "Telescope GameDevNews theme"});

Package.on_use(function (api) {

  api.use(['telescope-theme-hubble'], ['client']);

  api.add_files([
    'lib/client/stylesheets/screen.css',
    'lib/client/stylesheets/fonts/icomoon.eot',
    'lib/client/stylesheets/fonts/icomoon.svg',
    'lib/client/stylesheets/fonts/icomoon.ttf',
    'lib/client/stylesheets/fonts/icomoon.woff',
    ], ['client']);

});


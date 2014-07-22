Package.describe({summary: "Telescope GameDevNews theme"});

Package.on_use(function (api) {

  api.use(['telescope-theme-hubble'], ['client']);

  api.add_files([
    'lib/client/stylesheets/screen.css',
    ], ['client']);

});


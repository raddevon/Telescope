Package.describe({summary: "Telescope GameDevNews theme"});

Package.on_use(function (api) {

  api.use(['templating', 'telescope-base','telescope-theme-hubble'], ['client']);

  api.add_files([
    'lib/client/stylesheets/screen.css',
    'lib/client/stylesheets/fonts/icomoon.eot',
    'lib/client/stylesheets/fonts/icomoon.svg',
    'lib/client/stylesheets/fonts/icomoon.ttf',
    'lib/client/stylesheets/fonts/icomoon.woff',
    'lib/client/img/gamedevnews.png',
    'lib/client/img/gamedevnews.svg',
    'lib/client/img/gdn.svg',
    'lib/client/img/gdn.png',
    'lib/client/templates/new_nav.html',
    'lib/client/gamedevnews.js'
    ], ['client']);

});


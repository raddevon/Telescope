Package.describe({summary: "Telescope Newsletter GDN theme"});

Package.on_use(function (api) {

  api.use(['templating', 'spacebars', 'ui', 'telescope-lib', 'telescope-base', 'telescope-newsletter'], ['client']);

  api.add_files([
    'lib/client/newsletter_banner.html',
    'lib/client/newsletter_banner.css',
    'lib/client/templates.js'
    ], ['client']);

});
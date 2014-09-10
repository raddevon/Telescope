Package.describe({summary: "Telescope Newsletter GDN theme"});

Package.on_use(function (api) {

  api.use(['telescope-newsletter', 'telescope-base', 'telescope-lib'], ['client']);

  api.add_files([
    'lib/client/newsletter_banner.html',
    'lib/client/newsletter_banner.css',
    'lib/client/templates.js'
    ], ['client']);

});
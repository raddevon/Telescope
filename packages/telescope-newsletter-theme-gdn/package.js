Package.describe({summary: "Telescope Newsletter GDN theme"});

Package.on_use(function (api) {

  api.use(['telescope-newsletter'], ['client']);

  api.add_files([
    'lib/client/newsletter_banner.css',
    'lib/client/bannerTemplate.html'
    ], ['client']);

});
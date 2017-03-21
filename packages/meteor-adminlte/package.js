Package.describe({
  name: 'steedos:adminlte',
  version: '2.3.11',
  summary: 'adminlte package',
  git: ''
});

Npm.depends({
  "admin-lte": "2.3.11"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');

  api.use('steedos:bootstrap');

  api.addFiles('core.js', "client");

});

Package.onTest(function(api) {

});
Package.describe({
  name: 'steedos:moment',
  version: '2.18.0',
  summary: 'moment package',
  git: ''
});

Npm.depends({
  "moment": "2.18.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');

  api.addFiles('core.js', "client");

});

Package.onTest(function(api) {

});
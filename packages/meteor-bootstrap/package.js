Package.describe({
  name: 'steedos:bootstrap',
  version: '3.3.7',
  summary: 'bootstrap package',
  git: ''
});

Npm.depends({
  "bootstrap": "3.3.7"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');

  api.addFiles('core.js', "client");

});

Package.onTest(function(api) {

});
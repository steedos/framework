Package.describe({
  name: 'steedos:theme',
  version: '0.0.1',
  summary: 'Steedos Theme',
  git: 'https://github.com/steedos/platform/packages/steedos-theme'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');
  api.use('flemay:less-autoprefixer@1.2.0');

  api.addFiles([
    'client/core.coffee',
    'client/admin-lte.less'
  ], "client");

  api.export('Steedos');

});

Package.onTest(function(api) {

});
Package.describe({
  name: 'steedos:base',
  version: '0.0.1',
  summary: 'Steedos libraries',
  git: ''
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');

  api.use('dburles:collection-helpers@1.1.0');
  api.use('flemay:less-autoprefixer@1.2.0');
  api.use('simple:json-routes@2.1.0');
  api.use('aldeed:simple-schema@1.5.3');
  api.use('aldeed:collection2@2.10.0');
  api.use('aldeed:tabular@2.1.1');
  api.use('aldeed:autoform@5.0.0');
  api.use('matb33:collection-hooks@0.8.4');

  api.use('kadira:flow-router@2.10.1');
  api.use('meteorhacks:subs-manager@1.6.4');

  api.addFiles([
    'core.coffee'
  ]);

  api.export('Steedos');

});

Package.onTest(function(api) {

});
Package.describe({
  name: 'steedos:base',
  version: '0.0.2',
  summary: 'Steedos libraries',
  git: 'https://github.com/steedos/platform/packages/steedos-theme'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('session');
  api.use('coffeescript');
  api.use('ecmascript');
  api.use('blaze-html-templates');
  api.use('underscore');
  api.use('reactive-var');

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
    'client/core.coffee',
    'client/api.coffee',
    'client/helpers.coffee',
    'client/layout/main.html',
    'client/layout/main.less',
    'client/layout/main.coffee',
    'client/layout/layout.html',
    'client/layout/layout.less',
    'client/layout/header.html',
    'client/layout/header.less',
    'client/layout/sidebar.html',
  ], "client");

  api.export('Steedos');

});

Package.onTest(function(api) {

});
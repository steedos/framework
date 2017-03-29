Package.describe({
  name: 'steedos:accounts',
  version: '0.0.1',
  summary: 'User Accounts configration for Steedos',
  git: 'https://github.com/steedos/framework/packages/steedos-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('blaze-html-templates');
  api.use('accounts-password');
  api.use('underscore');
  api.use('reactive-var');
  api.use('tracker');
  api.use('templating', 'client');

  api.use('flemay:less-autoprefixer@1.2.0');
  api.use('kadira:flow-router@2.10.1');
  api.use('tap:i18n@1.8.2');

  api.use('useraccounts:bootstrap@1.14.2');
  api.use('useraccounts:core@1.14.2');
  api.use('useraccounts:flow-routing@1.14.2');
  api.use('softwarerero:accounts-t9n');

  api.use('steedos:base');

  api.addFiles('lib/core.coffee');
  api.addFiles('client/core.coffee', "client");
  api.addFiles('client/router.coffee', "client");

  api.addFiles('client/layout/login_layout.html', "client");
  api.addFiles('client/layout/login_layout.coffee', "client");
  api.addFiles('client/layout/login_layout.less', "client");


  api.export('Accounts');

});

Package.onTest(function(api) {

});
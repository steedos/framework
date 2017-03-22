Package.describe({
  name: 'steedos:fullcalendar',
  version: '3.2.0',
  summary: 'fullcalendar package',
  git: 'https://github.com/fullcalendar/fullcalendar'
});

Npm.depends({
  "fullcalendar": "3.2.0"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.use('coffeescript');
  api.use('ecmascript');

  api.use('steedos:moment');
  api.addFiles('core.js', "client");

});

Package.onTest(function(api) {

});
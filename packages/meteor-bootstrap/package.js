Package.describe({
  name: 'steedos:bootstrap',
  version: '3.3.7_1',
  summary: 'bootstrap package',
  git: ''
});


Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');

  api.addFiles('js/bootstrap.js', "client");  
  api.addFiles('css/bootstrap.css', "client");


});

Package.onTest(function(api) {

});
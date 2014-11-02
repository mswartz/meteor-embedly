Package.describe({
  name: 'mswartz:embedly',
  summary: ' Simple Embedly Extract and Embed API calls for Meteor',
  version: '1.0.0',
  git: 'https://github.com/mswartz/meteor-embedly'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('embedly.js');

  if(api.export){
	api.export('Embedly');
  }
});

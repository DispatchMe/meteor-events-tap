Package.describe({
  name: 'dispatch:events-tap',
  version: '0.0.1',
  summary: 'Handle tap events with support for multiple taps.',
  git: 'https://github.com/DispatchMe/meteor-events-tap.git'
});

Package.onUse(function (api) {
  api.addFiles('tap-event.js', 'web');

  api.export('Events');
});

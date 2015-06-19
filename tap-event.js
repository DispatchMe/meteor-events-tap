if (typeof Events === 'undefined') Events = {};

var currentNumberOfTaps = 0;

/**
 * Create a tap event.
 * @param {String} container The element to be tapped.
 * @param {Object} [options]
 *        {Number} [taps] The number of taps before event gets triggered.
 *        {Number} [timeout] The timespan which the taps need to occur in.
 */
Events.Tap = function (container, options) {
  var self = this;

  // Make sure we return an instance
  if (!(self instanceof Events.Tap)) return new Events.Tap(container, options);

  self.taps = options.taps || 1;
  self.timeout = options.timeout || self.taps * 500;

  var startTimer = function () {
    self.timer = Meteor.setTimeout(clearTimer, self.timeout);
  };

  var clearTimer = function () {
    currentNumberOfTaps = 0;
    Meteor.clearTimeout(self.timer);
  };

  var $container = $(container);

  return $container.on('touchstart', function () {
    currentNumberOfTaps++;

    if (currentNumberOfTaps === 1) startTimer();

    if (currentNumberOfTaps === self.taps) {
      clearTimer();
      $container.trigger('tap');
    }
  });
};

Meteor Events Tap
==============

Handle tap events with support for multiple taps.

##Usage
`meteor add dispatch:events-tap`

Create a tap event on a specific element and the event will be accessible on the container within the blaze template events.


```
Template.example.onRendered(function () {
  Events.Tap('.example-button', { taps: 5, timeout: 3000 });
});

Template.example.events({
  'tap .example-button': function () {
    console.log('You must have clicked me 5 times within 3 seconds!');
  }
});
```

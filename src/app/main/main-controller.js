'use strict';

angular.module('betterworkshw')
  .controller('MainCtrl', function ($state) {
    var main = this;

    main.expectedProgress = 72.0;
    main.actualProgress = 45.0;
  });

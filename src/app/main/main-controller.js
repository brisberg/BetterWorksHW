'use strict';

angular.module('betterworkshw')
  .controller('MainCtrl', function ($state) {
    var main = this;

    main.expectedProgress = 72.0;
    main.actualProgress = 45.0;
  })
  .directive('maindir', function () {
      var controller = function ($scope) {
          var selectedRange = 100;
      };

      return {
          scope: {

          },
          templateUrl: 'app/main/progress-selector.tmpl.html',
          controller: controller,
          controllerAs: 'ctrl',
          bindToController: true
      }
  })
;

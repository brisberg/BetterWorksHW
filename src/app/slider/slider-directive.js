'use strict';

angular.module('betterworkshw')
    .directive('slider', [function () {
        return {
            scope: {
                selectedRange: '='
            },
            templateUrl: 'app/slider/slider.tmpl.html',
        }
    }]
)
'use strict';

angular.module('betterworkshw')
    .directive('slider', [function () {
        return {
            restrict: 'E',
            scope: { metric: '=' },
            templateUrl: 'app/slider/slider.tmpl.html',

            link: function ($scope, $element, $attrs) {

            }
        }
    }]
)
'use strict';

angular.module('betterworkshw')
    .directive('slider', [function () {
        return {
            restrict: 'E',
            scope: {
                metric: '='
            },
            templateUrl: 'app/slider/slider.tmpl.html',
            link: function ($scope, $element, $attrs) {
                $scope.getFraction = function (metric) {
                    return metric.current / metric.expected;
                }
            }
        }
    }]
)
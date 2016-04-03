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
                var rootScope = $scope.$root;
                var metric = $scope.metric;

                $scope.currentChanged = function (newCurrentValue) {
                    rootScope.updateMetricCurrent(metric.name, parseInt(newCurrentValue));
                };

                $scope.expectedChanged = function (newExpectedValue) {
                    rootScope.updateMetricExpected(metric.name, parseInt(newExpectedValue));
                };
            }
        }
    }]
)
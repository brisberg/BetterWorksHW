'use strict';

angular.module('betterworkshw')
    .directive('slider', [function () {
        return {
            restrict: 'E',
            scope: { metric: '=' },
            templateUrl: 'app/slider/slider.tmpl.html',

            link: function ($scope, $element, $attrs) {
                $scope.currentStr  = $scope.metric.current;
                $scope.expectedStr = $scope.metric.expected;

                $scope.$watch("currentStr", function () {
                    $scope.metric.current = parseFloat($scope.currentStr);
                });
                $scope.$watch("expectedStr", function () {
                    $scope.metric.expected = parseFloat($scope.expectedStr);
                });
            }
        }
    }]
)
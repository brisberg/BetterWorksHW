'use strict';

angular.module('betterworkshw')
    .directive('slider', [function () {
        return {
            restrict: 'E',
            scope: { metric: '=' },
            templateUrl: 'app/slider/slider.tmpl.html',

            link: function ($scope, $element, $attrs) {
                $scope.actualStr  = $scope.metric.actual;
                $scope.expectedStr = $scope.metric.expected;

                $scope.$watch("actualStr", function () {
                    $scope.metric.actual = parseFloat($scope.actualStr);
                });
                $scope.$watch("expectedStr", function () {
                    $scope.metric.expected = parseFloat($scope.expectedStr);
                });
            }
        }
    }]
)
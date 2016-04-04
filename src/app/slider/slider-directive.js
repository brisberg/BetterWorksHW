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
                    console.log("change in currentStr");
                    $scope.metric.current = parseFloat($scope.currentStr);
                });
                $scope.$watch("expectedStr", function () {
                    console.log("change in expectedStr");
                    $scope.metric.expected = parseFloat($scope.expectedStr);
                });
            }
        }
    }]
)
'use strict';

angular.module('betterworkshw')
    .controller('MainCtrl', ['$scope', '$state', function ($scope, $state) {
        var main = this;

        $scope.model = { expectedProgress: 72.0, actualProgress: 45.0 };
        console.log($scope);
    }])
    .directive('maindir', function () {
        return {
            scope: {
                selectedRange: '='
            },
            templateUrl: 'app/main/progress-selector.tmpl.html',
        }
    })
;

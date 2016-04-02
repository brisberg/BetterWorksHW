angular.module('betterworkshw')
    .controller('ProgressController', [$scope, function($scope) {
        var ctrl = this;

        $scope.actual = 45;
    }])
    .directive('progress-selector', function () {
        return {
            scope: {
                selectedRange: '='
            },
            templateUrl: 'app/main/progress-selector.tmpl.html',
            controller: function () {
                this.selectedRange = '65';
            },
            controllerAs: 'ctrl',
            bindToController: true
        }
    })
;
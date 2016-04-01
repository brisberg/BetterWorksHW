angular.module('betterworkshw')
    .directive('progress-selector', function () {
        var controller = function ($scope) {
            var selectedRange = 0;
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
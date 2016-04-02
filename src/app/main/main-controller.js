'use strict';

angular.module('betterworkshw')
    .controller('MainCtrl', [function ($scope) {
        var main = this;

        main.metrics = [
            {name: 'Jira tickets closed', expected: 85, current: 80},
            {name: 'Quarterly reports filed', expected: 45, current: 10},
            {name: 'Summoning C\'thun', expected: 100, current: 92},
            {name: 'Version 2.4 release', expected: 64, current: 40},
            {name: 'Sharpening pencils', expected: 64, current: 40},
            {name: 'Fabricating potato chips', expected: 70, current: 65},
        ]
    }])

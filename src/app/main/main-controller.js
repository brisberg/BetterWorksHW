'use strict';

angular.module('betterworkshw')
    .controller('MainCtrl', function ($scope, $rootScope) {
        var main = this;

        $rootScope.metrics = [
            {name: 'JIRA tickets closed', expected: 85, current: 80},
            {name: 'Quarterly reports filed', expected: 45, current: 10},
            {name: 'Summoning C\'thun', expected: 100, current: 92},
            {name: 'Version 2.4 release', expected: 64, current: 40},
            {name: 'Pencils Sharpened', expected: 64, current: 40},
            {name: 'Potato chips fabricated', expected: 70, current: 65},
        ];

        $rootScope.updateMetric = function(metricName, newValue) {
            $rootScope.metrics.forEach(function (metric) {
                if (metric.name == metricName) {
                    metric.current = newValue;
                }
            })
        };
    })

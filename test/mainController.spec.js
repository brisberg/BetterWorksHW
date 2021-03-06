/**
 * Created by Brandon Risberg on 4/2/2016.
 */

describe('Controller: MainCtrl', function () {
    // Instantiate a new version of my module before each test
    beforeEach(module('betterworkshw'));

    var scope;
    var ctrl;

    // Before each test instantiate a new instance of the controller
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ctrl = $controller('MainCtrl', {$scope: scope});
    }));

    it('should have created the metrics', function () {
        expect(ctrl.metrics).toEqual([
                {name: 'JIRA tickets closed', expected: 0.85, actual: 0.80},
                {name: 'Quarterly reports filed', expected: 0.45, actual: 0.10},
                {name: 'Summoning C\'thun', expected: 1.00, actual: 0.92},
                {name: 'Version 2.4 release', expected: 0.64, actual: 0.40},
                {name: 'Potato chips fabricated', expected: 0.70, actual: 0.65},
                {name: 'Pencils sharpened', expected: 0.71, actual: 0.30}
            ]
        )
    });
})
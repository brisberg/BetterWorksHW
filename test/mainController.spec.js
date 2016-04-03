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
                {name: 'JIRA tickets closed', expected: 85, current: 80},
                {name: 'Quarterly reports filed', expected: 45, current: 10},
                {name: 'Summoning C\'thun', expected: 100, current: 92},
                {name: 'Version 2.4 release', expected: 64, current: 40},
                {name: 'Pencils sharpened', expected: 64, current: 40},
                {name: 'Potato chips fabricated', expected: 70, current: 65}
            ]
        )
    });
})
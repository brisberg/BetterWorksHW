/**
 * Created by Brandon Risberg on 4/3/2016.
 */

describe('Gauge Directive Rendering', function () {
    beforeEach(module('betterworkshw'));
    beforeEach(module('templates'));

    var compile, mockBackend, rootScope;

    // Helper functions
    function flushAllD3Transitions() {
        var now = Date.now;
        Date.now = function() { return Infinity; };
        d3.timer.flush();
        Date.now = now;
    }

    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        rootScope = $rootScope;
    }));

    it('should render HTML based on scope correctly', function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            expected: 1.00,
            actual: 0.66
        };
        scope.title = 'BetterWorksHW';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        flushAllD3Transitions();

        var renderedHTML = element.html().trim();

        expect($('g', renderedHTML)).toExist();
        expect($('g', renderedHTML).attr('transform')).toEqual('translate(70,70)');

        expect($('path.arc_inner', renderedHTML)).toExist();
        expect($('path.arc_outer', renderedHTML)).toExist();
        expect($('path.circle_center', renderedHTML)).toExist();
        expect($('text', renderedHTML)).toExist();
        expect($('text .progress_number', renderedHTML)).toExist();
        expect($('text .progress_number', renderedHTML)).toContainText('66');
        expect($('text.progress_label', renderedHTML)).toExist();
        expect($('text.progress_label', renderedHTML)).toContainText('Progress');

        expect(renderedHTML).toEqual(
            '<svg width="140" height="140">' +
            '<g transform="translate(70,70)">' +
            '<path class="arc_inner" d="M0,53A53,53 0 1,1 0,-53A53,53 0 1,1 0,53M0,50A50,50 0 1,0 0,-50A50,50 0 1,0 0,50Z"></path>' +
            '<path class="arc_outer arc_outer_norm" d="M4.440892098500626e-15,-56.92099788303082A3,3 0 0,1 3.1578947368421098,-59.91683987687455A60,60 0 1,1 -48.897376500154785,34.771346988607014A3,3 0 0,1 -48.059988060084024,30.49979586267062L-48.059988060084024,30.49979586267062A3,3 0 0,1 -44.0076388501393,31.294212289746316A54,54 0 1,0 2.8421052631578987,-53.925155889187096A3,3 0 0,1 4.440892098500626e-15,-56.92099788303082Z" style="fill: #78c000;"></path>' +
            '<path class="circle_center" d="M0,43A43,43 0 1,1 0,-43A43,43 0 1,1 0,43Z"></path>' +
            '<text transform="translate(0,-0)" style="text-anchor: middle;">' +
            '<tspan class="progress_number">66</tspan><tspan class="progress_percent">%</tspan>' +
            '</text>' +
            '<text class="progress_label" font-size="12px" transform="translate(0,15)" style="text-anchor: middle;">Progress</text>' +
            '</g>' +
            '</svg>');
    });

    it("should validate missing 'Current' value", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            expected: 1.00
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Actual' Value");
    });

    it("should validate missing 'Expected' value", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            actual: 0.50
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Expected' Value");
    });

    it("should validate 'Expected' value greater than or equal to 0.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            actual: 0.50,
            expected: -0.20
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Expected' Value");
    });

    it("should validate 'Expected' value less than or equal to 1.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            actual: 0.50,
            expected: 1.20
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Expected' Value");
    });

    it("should validate 'Actual' value greater than or equal to 0.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            actual: -0.20,
            expected: 0.50
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Actual' Value");
    });

    it("should validate 'Actual' value less than or equal to 1.0", function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            actual: 1.2,
            expected: 0.50
        };
        scope.title = 'ANG09';

        var element = compile('<gauge metric="metric"/>')(scope);

        scope.$digest();

        expect(element.html().trim()).toEqual(
            "Invalid 'Actual' Value");
    });
});

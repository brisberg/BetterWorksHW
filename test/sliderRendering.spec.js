/**
 * Created by Brandon Risberg on 4/3/2016.
 */

describe('Slider Directive Rendering', function () {
    beforeEach(module('betterworkshw'));
    beforeEach(module('templates'));

    var compile, mockBackend, rootScope;

    beforeEach(inject(function ($compile, $rootScope) {
        compile = $compile;
        rootScope = $rootScope;
    }));

    it('should render HTML based on scope correctly', function () {
        var scope = rootScope.$new();

        scope.metric = {
            name: 'Wombats',
            expected: 100,
            current: 66
        };
        scope.title = 'ANG09';

        var element = compile('<slider metric="metric"/>')(scope);

        scope.$digest();

        var renderedHTML = element.html().trim();

        expect(renderedHTML).toContain(
            '<div class="slider-cur">'
        );
        expect(renderedHTML).toContain(
            '<span class="num ng-binding">66</span>'
        );

        expect(renderedHTML).toContain(
            '<div class="slider-expected">'
        );
        expect(renderedHTML).toContain(
            '<span class="num ng-binding">100</span>'
        );
    });
});

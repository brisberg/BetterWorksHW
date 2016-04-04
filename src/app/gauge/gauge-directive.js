'use strict';

angular.module('betterworkshw')
    .directive('gauge', [function () {
        return {
            restrict: 'E',
            scope: {metric: '='},
            templateUrl: 'app/gauge/gauge.tmpl.html',
            link: function ($scope, $element, $attrs) {

                var metric = $scope.metric;

                $scope.$watch("metric.current", function () {
                    repaint(metric);
                });

                $scope.$watch("metric.expected", function () {
                    repaint(metric);
                });

                function repaint(metric) {
                    if (typeof(metric.expected) !== "number" || metric.expected < 0.0 || metric.expected > 1.0) {
                        // Based on http://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
                        // If the data is wrong, remove all SVG elements and place an error text.
                        while ($element[0].firstChild) {
                            $element[0].removeChild($element[0].firstChild);
                        }
                        var errorText = document.createTextNode("Invalid 'Expected' Value");
                        $element[0].appendChild(errorText);
                    }
                    else if (typeof(metric.current) !== "number" || metric.current < 0.0 || metric.current > 1.0) {
                        // Based on http://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
                        // If the data is wrong, remove all SVG elements and place an error text.
                        while ($element[0].firstChild) {
                            $element[0].removeChild($element[0].firstChild);
                        }
                        var errorText = document.createTextNode("Invalid 'Current' Value");
                        $element[0].appendChild(errorText);
                    }
                    else {
                        var arcInnerFrac = metric.expected;
                        var arcOuterFrac = metric.current;
                        var progressFrac = metric.current / metric.expected;
                        var progressLabel = (100 * metric.current).toFixed();
                        var outerColor = "arc_outer_norm";

                        if (progressFrac < 0.25) {
                            outerColor = "arc_outer_danger"
                        } else if (progressFrac < 0.5) {
                            outerColor = "arc_outer_warn"
                        }

                        if (typeof(d3) !== "undefined") { // Make sure d3 library is available
                            d3.select($element[0]).selectAll("*").remove();

                            var svg = d3.select($element[0])
                                .append("svg")
                                .attr("width", 140)
                                .attr("height", 140)
                                .append("g")
                                .attr("transform", "translate(70,70)");

                            var arc_inner = d3.svg.arc()
                                .innerRadius(50)
                                .outerRadius(53)
                                .startAngle(0)
                                .endAngle(arcInnerFrac * 2 * Math.PI)
                                .cornerRadius(10);

                            svg.append("path")
                                .attr("class", "arc_inner")
                                .attr("d", arc_inner);

                            var arc_outer = d3.svg.arc()
                                .innerRadius(54)
                                .outerRadius(60)
                                .startAngle(0)
                                .endAngle(arcOuterFrac * 2 * Math.PI)
                                .cornerRadius(10);

                            svg.append("path")
                                .attr("class", outerColor)
                                .attr("d", arc_outer);

                            var circle_center = d3.svg.arc()
                                .innerRadius(0)
                                .outerRadius(43)
                                .startAngle(0)
                                .endAngle(2 * Math.PI)

                            svg.append("path")
                                .attr("class", "circle_center")
                                .attr("d", circle_center);

                            svg.append("text")
                                .style("text-anchor", "middle")
                                .attr("font-size", "20px")
                                .text(progressLabel)
                                .attr("transform", "translate(0,-2)");

                            svg.append("text")
                                .style("text-anchor", "middle")
                                .attr("font-size", "12px")
                                .attr("font-style", "oblique")
                                .text("Progress")
                                .attr("transform", "translate(0,15)");
                        }
                    }
                }
            }
        }
    }]
)
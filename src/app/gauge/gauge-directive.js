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
                    update(metric);
                });

                $scope.$watch("metric.expected", function () {
                    update(metric);
                });

                function render(metric) {
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
                        var progressLabel = (100 * metric.current).toFixed() + "";
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

                            var arc_inner = drawArc({endAngle:0, innerRadius:50, outerRadius:53});

                            svg.append("path")
                                .datum({endAngle:0, innerRadius:50, outerRadius:53})
                                .attr("class", "arc_inner")
                                .attr("d", arc_inner)

                            var arc_outer = drawArc({endAngle:0, innerRadius:54, outerRadius:60});

                            svg.append("path")
                                .datum({endAngle:0, innerRadius:54, outerRadius:60})
                                .attr("class", "arc_outer " + outerColor)
                                .attr("d", arc_outer)

                            var circle_center = d3.svg.arc()
                                .innerRadius(0)
                                .outerRadius(43)
                                .startAngle(0)
                                .endAngle(2 * Math.PI);

                            svg.append("path")
                                .attr("class", "circle_center")
                                .attr("d", circle_center);

                            var upperText = svg.append("text")
                                .style("text-anchor", "middle")
                                .attr("transform", "translate(0,-0)");

                            upperText.append("tspan")
                                .attr("class", "progress_number")
                                .text("+");

                            upperText.append("tspan")
                                .attr("class", "progress_percent")
                                .text("%");

                            svg.append("text")
                                .style("text-anchor", "middle")
                                .attr("class", "progress_label")
                                .attr("font-size", "12px")
                                .text("Progress")
                                .attr("transform", "translate(0,15)");
                        }
                    }
                }

                function update(metric) {
                    var arcInner = d3.select($element[0]).selectAll(".arc_inner");
                    var arcOuter = d3.select($element[0]).selectAll(".arc_outer");
                    var progressNumber = d3.select($element[0]).selectAll(".progress_number");

                    arcInner.transition()
                        .duration(1200)
                        .call(arcTween, (metric.expected * 2 * Math.PI));
                    arcOuter.transition()
                        .duration(1200)
                        .call(arcTween, (metric.current * 2 * Math.PI));
                    progressNumber.text((100 * metric.current).toFixed() + "")
                }

                // set up animation functions
                var drawArc = d3.svg.arc()
                    .innerRadius(function(d) {
                        return d.innerRadius;
                    })
                    .outerRadius(function(d) {
                        return d.outerRadius;
                    })
                    .startAngle(0)
                    .endAngle(function(d) {
                        return d.endAngle;
                    })
                    .cornerRadius(10);

                function arcTween(transition, newAngle) {
                    transition.attrTween("d", function(d) {
                        var interpolate = d3.interpolate(d.endAngle, newAngle);

                        return function(t) {
                            d.endAngle = interpolate(t);
                            return drawArc(d);
                        };
                    });
                }


                // set up initial display.
                render(metric);
                update(metric);
            }
        }
    }]
)
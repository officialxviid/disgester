'use strict';

/**
 * @fileOverview Generate pie chart for markvis
 * @name index.js<src>
 * @author GeekPlux
 * @license MIT
 */
var _require = require('./utils'),
    addStyle = _require.addStyle;

function pie() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      data = _ref.data,
      d3 = _ref.d3,
      D3Node = _ref.d3node,
      _ref$selector = _ref.selector,
      _selector = _ref$selector === undefined ? '#chart' : _ref$selector,
      _ref$container = _ref.container,
      _container = _ref$container === undefined ? '\n    <div id="container">\n      <h2>Pie Chart</h2>\n      <div id="chart"></div>\n    </div>\n  ' : _ref$container,
      _ref$style = _ref.style,
      _style = _ref$style === undefined ? '' : _ref$style,
      _ref$width = _ref.width,
      _width = _ref$width === undefined ? 400 : _ref$width,
      _ref$radius = _ref.radius,
      _radius = _ref$radius === undefined ? _width / 2 * 0.9 : _ref$radius,
      _ref$export = _ref.export,
      _export = _ref$export === undefined ? false : _ref$export;

  var _svgStyles = '\n    .arc text { font: 10px sans-serif; text-anchor: middle; }\n    .arc path { stroke: #fff; }\n  ' + _style;

  var _d3 = void 0;
  var d3n = void 0;
  var svg = void 0;
  var _div = void 0;

  var isNodeEnv = function isNodeEnv() {
    return D3Node;
  };

  if (isNodeEnv()) {
    d3n = new D3Node({
      selector: _selector,
      styles: _svgStyles,
      container: _container
    });
    _d3 = d3n.d3;
    svg = d3n.createSVG();
  } else {
    _div = document.createElement('div');
    _div.innerHTML = _container;
    _d3 = d3;
    svg = _d3.select(_div).select('#chart').append('svg');
    addStyle(_svgStyles);
  }

  var color = _d3.scaleOrdinal(_d3.schemeCategory20b);
  var arc = _d3.arc().outerRadius(_radius - 10).innerRadius(0);

  var labelArc = _d3.arc().outerRadius(_radius - 40).innerRadius(_radius - 40);

  var pie = _d3.pie().sort(null).value(function (d) {
    return d.value;
  });

  var margin = _width / 2;
  var g = svg.attr('width', _width).attr('height', _width).append('g').attr('transform', 'translate(' + margin + ', ' + margin + ')');

  var gArc = g.selectAll('.arc').data(pie(data)).enter().append('g').attr('class', 'arc');

  gArc.append('path').attr('d', arc).style('fill', function (d) {
    return color(d.data.key);
  });

  gArc.append('text').attr('transform', function (d) {
    return 'translate(' + labelArc.centroid(d) + ')';
  }).attr('dy', '.35em').text(function (d) {
    return d.data.key;
  });

  var result = void 0;
  if (isNodeEnv()) {
    if (_export) result = d3n;else result = d3n.chartHTML();
  } else result = _div.querySelector('#container').innerHTML;

  return result;
}

module.exports = pie;
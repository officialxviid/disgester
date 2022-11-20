'use strict';

/**
 * @fileOverview Generate line chart for markvis
 * @name index.js<src>
 * @author GeekPlux
 * @license MIT
 */
var _require = require('./utils'),
    addStyle = _require.addStyle;

function line() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      data = _ref.data,
      d3 = _ref.d3,
      D3Node = _ref.d3node,
      _ref$selector = _ref.selector,
      _selector = _ref$selector === undefined ? '#chart' : _ref$selector,
      _ref$container = _ref.container,
      _container = _ref$container === undefined ? '\n    <div id="container">\n      <h2>Line Chart</h2>\n      <div id="chart"></div>\n    </div>\n  ' : _ref$container,
      _ref$style = _ref.style,
      _style = _ref$style === undefined ? '' : _ref$style,
      _ref$dotAttrs = _ref.dotAttrs,
      _dotAttrs = _ref$dotAttrs === undefined ? {} : _ref$dotAttrs,
      _ref$width = _ref.width,
      _width = _ref$width === undefined ? 960 : _ref$width,
      _ref$height = _ref.height,
      _height = _ref$height === undefined ? 500 : _ref$height,
      _ref$responsive = _ref.responsive,
      _responsive = _ref$responsive === undefined ? false : _ref$responsive,
      _ref$margin = _ref.margin,
      _margin = _ref$margin === undefined ? { top: 20, right: 20, bottom: 20, left: 30 } : _ref$margin,
      _ref$showXAxis = _ref.showXAxis,
      _showXAxis = _ref$showXAxis === undefined ? true : _ref$showXAxis,
      _ref$showYAxis = _ref.showYAxis,
      _showYAxis = _ref$showYAxis === undefined ? true : _ref$showYAxis,
      _ref$showDots = _ref.showDots,
      _showDots = _ref$showDots === undefined ? true : _ref$showDots,
      _ref$showValues = _ref.showValues,
      _showValues = _ref$showValues === undefined ? true : _ref$showValues,
      _ref$lineWidth = _ref.lineWidth,
      _lineWidth = _ref$lineWidth === undefined ? 1.5 : _ref$lineWidth,
      _ref$lineColor = _ref.lineColor,
      _lineColor = _ref$lineColor === undefined ? 'steelblue' : _ref$lineColor,
      _ref$isCurve = _ref.isCurve,
      _isCurve = _ref$isCurve === undefined ? true : _ref$isCurve,
      _ref$curveType = _ref.curveType,
      _curveType = _ref$curveType === undefined ? 'curveMonotoneX' : _ref$curveType,
      _ref$export = _ref.export,
      _export = _ref$export === undefined ? false : _ref$export;

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
      styles: _style,
      container: _container
    });
    _d3 = d3n.d3;
    svg = d3n.createSVG();
  } else {
    _div = document.createElement('div');
    _div.innerHTML = _container;
    _d3 = d3;
    svg = _d3.select(_div).select(_selector).append('svg');
    addStyle(_style);
  }

  var width = _width - _margin.left - _margin.right;
  var height = _height - _margin.top - _margin.bottom;

  var gWrap = svg.append('g').attr('transform', 'translate(' + _margin.left + ', ' + _margin.top + ')');

  if (_responsive) {
    svg.attr('viewBox', '0 0 ' + _width + ' ' + _height).attr('preserveAspectRatio', 'xMinYMin');
  } else {
    svg.attr('width', _width).attr('height', _height);
  }

  var g = gWrap.append('g');

  var xScale = _d3.scaleLinear().rangeRound([0, width]);
  var yScale = _d3.scaleLinear().rangeRound([height, 0]);

  var lineChart = _d3.line().x(function (d) {
    return xScale(d.key);
  }).y(function (d) {
    return yScale(d.value);
  });

  if (_isCurve) lineChart.curve(_d3[_curveType]);

  xScale.domain(_d3.extent(data, function (d) {
    return d.key;
  }));
  yScale.domain(_d3.extent(data, function (d) {
    return d.value;
  }));

  if (_showXAxis) {
    g.append('g').attr('transform', 'translate(0, ' + height + ')').call(_d3.axisBottom(xScale));
  }

  if (_showYAxis) {
    g.append('g').call(_d3.axisLeft(yScale));
  }

  g.append('path').datum(data).attr('fill', 'none').attr('stroke', _lineColor).attr('stroke-width', _lineWidth).attr('d', lineChart);

  if (_showDots) {
    (function () {
      var dotContainer = g.append('g');
      dotContainer.selectAll('circle').data(data).enter().append('circle').classed('dot', true).attr('fill', _lineColor).attr('r', 4).attr('cx', function (d) {
        return xScale(d.key);
      }).attr('cy', function (d) {
        return yScale(d.value);
      });

      var keys = Object.keys(_dotAttrs);

      var _loop = function _loop(i) {
        dotContainer.selectAll('.dot').attr(keys[i], function (d) {
          return _dotAttrs[keys[i]](d.value);
        });
      };

      for (var i = 0; i < keys.length; i++) {
        _loop(i);
      }
    })();
  }

  if (_showValues) {
    g.append('g').selectAll('text').data(data).enter().append('text').attr('class', 'dot-value-label').attr('text-anchor', 'middle').attr('x', function (d) {
      return xScale(d.key);
    }).attr('y', function (d) {
      return yScale(d.value);
    }).attr('dy', '-0.5em').attr('fill', 'currentColor').text(function (d) {
      return d.value;
    });
  }

  var result = void 0;
  if (isNodeEnv()) {
    if (_export) result = d3n;else result = d3n.chartHTML();
  } else result = _div.querySelector(_selector).parentNode.innerHTML;

  return result;
}

module.exports = line;
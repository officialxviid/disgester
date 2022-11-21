## LineChart

> Line chart generator for [markvis](https://github.com/geekplux/markvis) in browser and node.js.

[![NPM version](https://img.shields.io/npm/v/markvis-line.svg?style=flat-square)](https://npmjs.com/package/markvis-line) [![NPM downloads](https://img.shields.io/npm/dm/markvis-line.svg?style=flat-square)](https://npmjs.com/package/markvis-line) [![Build](https://travis-ci.org/geekplux/markvis-line.svg?style=flat-square)](https://travis-ci.org/geekplux/markvis-line) [![Coverage](https://coveralls.io/repos/github/geekplux/markvis-line/badge.svg?style=flat-square)](https://coveralls.io/github/geekplux/markvis-line) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://geekplux.github.io/donate)

## Install

```bash
npm install markvis-line --save

or use yarn

yarn add markvis-line --save
```

## Usage

```js
const markvisLine = require('markvis-line');
const line = markvisLine({ data, d3, d3node })
```

Check out the [example](./example) for usage.

#### Output the visualization result to a image

```
npm run example
```

#### Output Preview (png):

![chart](./example/output.png)


## API

### markvisLine({ data, d3, d3node[, selector, container, style] })

#### options

##### data

- Type: `Array`

Data from file or web processed by d3 library.

##### d3

- Type: `Object`

[d3](https://github.com/d3/d3) library which used in **browser** environment.

##### d3node

- Type: `Object`

[d3-node](https://github.com/d3-node/d3-node) constructor which used in **node** environment.

##### selector

- Type: `String`
- Default: `'#chart'`

DOM selector in container.

##### container

- Type: `String`
- Default: `<div id="container"><h2>Line Chart</h2><div id="chart"></div></div>`

DOM contained the visualization result.

##### style

- Type: `String`<br>
- Default: `''`

Line chart style.

##### width

- Type: `Number`<br>
- Default: `960`

SVG width for line chart.

##### height

- Type: `Number`<br>
- Default: `500`

SVG height for line chart.

##### responsive

- Type: `boolean`<br>
- Default: `false`

Whether the chart should be automatically resized to fit its container. If true, `width` and `height` options are used for the initial sizing/SVG viewBox size.

##### margin

- Type: `Object`<br>
- Default: `{ top: 20, right: 20, bottom: 20, left: 30 }`

Margin of the first <g> wrapper in SVG, usually used to add axis.

##### lineWidth

- Type: `Number`<br>
- Default: `1.5`

Width of line.

##### lineColor

- Type: `string`<br>
- Default: `steelblue`

Color of line.

##### showXAxis

- Type: `boolean`<br>
- Default: `true`

Whether to show the X axis.

##### showYAxis

- Type: `boolean`<br>
- Default: `true`

Whether to show the Y axis.

##### showValues

- Type: `boolean`<br>
- Default: `true`

Whether to show values above each point.

##### showDots

- Type: `boolean`
- Default: `true`

Whether to show dots at each point.

##### dotAttrs

- Type: `Object`<br>
- Default: `{}`

Attributes set on each dot element (only if `showDots` is `true`).

##### isCurve

- Type: `boolean`<br>
- Default: `true`

Whether the line chart is curve.

##### export

- Type: `boolean`<br>
- Default: `false`

Whether to export to a PNG image.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


### LICENSE

**markvis-line** © [geekplux](https://github.com/geekplux), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by geekplux with help from contributors ([list](https://github.com/geekplux/markvis/contributors)).

> [geekplux.com](http://geekplux.com) · GitHub [@geekplux](https://github.com/geekplux) · Twitter [@geekplux](https://twitter.com/geekplux)

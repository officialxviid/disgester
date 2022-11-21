## BarChart

> Bar chart generator for [markvis](https://github.com/geekplux/markvis) in browser and node.js.

[![NPM version](https://img.shields.io/npm/v/markvis-bar.svg?style=flat-square)](https://npmjs.com/package/markvis-bar) [![NPM downloads](https://img.shields.io/npm/dm/markvis-bar.svg?style=flat-square)](https://npmjs.com/package/markvis-bar) [![Build](https://travis-ci.org/geekplux/markvis-bar.svg?style=flat-square)](https://travis-ci.org/geekplux/markvis-bar) [![Coverage](https://coveralls.io/repos/github/geekplux/markvis-bar/badge.svg?style=flat-square)](https://coveralls.io/github/geekplux/markvis-bar) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://geekplux.github.io/donate)

## Install

```bash
npm install markvis-bar --save

or use yarn

yarn add markvis-bar --save
```

## Usage

```js
const markvisBar = require('markvis-bar');
const bar = markvisBar({ data, d3, d3node })
```

Check out the [example](./example) for usage.

#### Output the visualization result to a PNG image

```
npm run example
```

#### Output Preview (png):

![chart](./example/output.png)


## API

### markvisBar({ data, d3, d3node[, selector, container, style]})

#### options

##### data

- Type: `Array`

Data from file or web processed by d3 library.

##### d3

- Type: `Object`

[d3](https://github.com/d3/d3) library which used in **browser** environment.

##### d3node

- Type: `Function`

[d3-node](https://github.com/d3-node/d3-node) constructor which used in **node** environment.

##### selector

- Type: `String`
- Default: `'#chart'`

DOM selector in container.

##### container

- Type: `String`
- Default: `<div id="container"><h2>Bar Chart</h2><div id="chart"></div></div>`

DOM contained the visualization result.

##### style

- Type: `String`<br>
- Default:
```html
.bar {fill: steelblue;}
.bar:hover {fill: brown;}
```
Bar chart style.

##### barAttrs

- Type: `Object`<br>
- Default: `{}`

Attributes set on each bar element.

##### width

- Type: `Number`<br>
- Default: `960`

SVG width for bar chart.

##### height

- Type: `Number`<br>
- Default: `500`

SVG height for bar chart.

##### responsive

- Type: `boolean`<br>
- Default: `false`

Whether the chart should be automatically resized to fit its container. If true, `width` and `height` options are used for the initial sizing/SVG viewBox size.

##### margin

- Type: `Object`<br>
- Default: `{ top: 20, right: 20, bottom: 20, left: 20 }`

Margin of the first <g> wrapper in SVG, usually used to add axis.

##### barColor

- Type: `string`<br>
- Default: `steelblue`

Color of bar.

##### barHoverColor

- Type: `string`<br>
- Default: `brown`

Color of bar hovered.

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

Whether to show values above each bar.

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

**markvis-bar** © [geekplux](https://github.com/geekplux), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by geekplux with help from contributors ([list](https://github.com/geekplux/markvis/contributors)).

> [geekplux.com](http://geekplux.com) · GitHub [@geekplux](https://github.com/geekplux) · Twitter [@geekplux](https://twitter.com/geekplux)

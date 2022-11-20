## PieChart

> Pie chart generator for [markvis](https://github.com/geekplux/markvis) in browser and node.js.

[![NPM version](https://img.shields.io/npm/v/markvis-pie.svg?style=flat-square)](https://npmjs.com/package/markvis-pie) [![NPM downloads](https://img.shields.io/npm/dm/markvis-pie.svg?style=flat-square)](https://npmjs.com/package/markvis-pie) [![Build](https://travis-ci.org/geekplux/markvis-pie.svg?style=flat-square)](https://travis-ci.org/geekplux/markvis-pie) [![Coverage](https://coveralls.io/repos/github/geekplux/markvis-pie/badge.svg?style=flat-square)](https://coveralls.io/github/geekplux/markvis-pie) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat-square)](https://geekplux.github.io/donate)

## Install

```bash
npm install markvis-pie --save

or use yarn

yarn add markvis-pie --save
```

## Usage

```js
const markvisPie = require('markvis-pie');
const pie = markvisPie({ data, d3, d3node })
```

Check out the [example](./example) for usage.

#### Output the visualization result to a image

```
npm run example
```

#### Output Preview (png):

![chart](./example/output.png)

## API

### markvisPie({ data, d3, d3node[, selector, container, style] })

### options

#### data

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
- Default: `<div id="container"><h2>Pie Chart</h2><div id="chart"></div></div>`

DOM contained the visualization result.

##### style

- Type: `String`<br>
- Default:
```html
.arc text {
   font: 10px sans-serif;
   text-anchor: middle;
}
.arc path {
   stroke: #fff;
 }
```
Pie chart style.

##### width

- Type: `Number`<br>
- Default: `960`

SVG width for pie chart.

##### radius

- Type: `Number`<br>
- Default: `width / 2 * 0.9`

Radius for pie chart.

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

**markvis-pie** © [geekplux](https://github.com/geekplux), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by geekplux with help from contributors ([list](https://github.com/geekplux/markvis/contributors)).

> [geekplux.com](http://geekplux.com) · GitHub [@geekplux](https://github.com/geekplux) · Twitter [@geekplux](https://twitter.com/geekplux)


<div align="center">
  <h1>Runtime Parameter Plugin</h1>
  <p>Plugin that allows passing parameters to JS bundles at runtime</p>
</div>

<h2 align="center">Install</h2>

```bash
  npm i --save-dev runtime-parameter-plugin
```

```bash
  yarn add --dev runtime-parameter-plugin
```

<h2 align="center">Usage</h2>



**webpack.config.js**
```js
const RuntimeParameterPlugin = require('runtime-parameter-plugin')

module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new RuntimeParameterPlugin([
        'RuntimeVariable_1',
        { name: 'RuntimeVariable_2', isKeySet: false }
        { name: 'RuntimeVariableSet', isKeySet: true }
    ])
  ]
}
```

**index.js**
```js

if (RuntimeVariable_1 === 'a') {
    consol.log('RuntimeVariable_1 is a');
}

if (RuntimeVariable_2 === 'b') {
    consol.log('RuntimeVariable_2 is b');
}

if (RuntimeVariableSet.Value1 === 'c') {
    consol.log('RuntimeVariableSet.Value1 is c');
}

if (RuntimeVariableSet.Value2 === 'd') {
    consol.log('RuntimeVariableSet.Value2 is d');
}

```

**index_bundle.js**
```js
// ... webpack runtime ...

/******/ 	// Load runtime parameters from global
/******/ 	__webpack_require__.rp = window["webpackRuntimeParameters_main"] = window["webpackRuntimeParameters_main"] || {};

// ... continue webpack runtime ...

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_runtime_parameter_RuntimeVariable_1, __webpack_runtime_parameter_RuntimeVariable_2, __webpack_runtime_parameter_RuntimeVariableSet_dot_Value1, __webpack_runtime_parameter_RuntimeVariableSet_dot_Value2) {if (__webpack_runtime_parameter_RuntimeVariable_1 === 'a') {
    consol.log('RuntimeVariable_1 is a');
}

if (__webpack_runtime_parameter_RuntimeVariable_2 === 'b') {
    consol.log('RuntimeVariable_2 is b');
}

if (__webpack_runtime_parameter_RuntimeVariableSet_dot_Value1 === 'c') {
    consol.log('RuntimeVariableSet.Value1 is c');
}

if (__webpack_runtime_parameter_RuntimeVariableSet_dot_Value2 === 'd') {
    consol.log('RuntimeVariableSet.Value2 is d');
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__.rp["RuntimeVariable_1"], __webpack_require__.rp["RuntimeVariable_2"], __webpack_require__.rp["RuntimeVariableSet.Value1"], __webpack_require__.rp["RuntimeVariableSet.Value2"]))

/***/ })
```

Now, you can assign window['webpackRuntimeParameters_index'] before loading the bundle to pass variables
```html

<script>
    window['webpackRuntimeParameters_main'] = {
        'RuntimeVariable_1': 'a',
        'RuntimeVariable_2': 'b',
        'RuntimeVariableSet.Value1': 'c',
        'RuntimeVariableSet.Value2': 'd',
    };
</script>
<script src="./index_bundle.js"></script>
```
# extend-export

Extend export

<!-- [![build status](https://secure.travis-ci.org/yieme/extend-export.png)](http://travis-ci.org/yieme/extend-export) -->

## Installation

This module is installed via npm:

```sh
npm i extend-export --save
```

## Examples

#### SailsJS Controller Example

Want to add a superset-enhancement to:

```js
module.export = {
	get: function(req, res) {
		// ...
	} // ...
}
```

Becomes

```js
var extendExport = require('extend-export')
var _super = require('superset-enhancement')
extendExport(_super, {
	get: function(req, res) {
		// ...
	} // ...
})
```

Or with shortcut

```js
require('extend-export')('superset-enhancement', {
	get: function(req, res) {
		// ...
	} // ...
})
```


#### Parse text and apply export extension


```js
var extendExport = require('extend-export')
extendExport().parse("module.export = { foo: 'bar' }", 'enhancement') /* produces
var _ExtendExport = { foo: 'bar' }
require('extend-export')(_ExtendExport, 'enhancement');
*/
```

#### Parse file and apply export extension

```js
var extendExport = require('extend-export')
extendExport().parseFile("module.export = { foo: 'bar' }", 'enhancement', function (err, parsedText) {
console.log(parsedText) /* produces
var _ExtendExport = { foo: 'bar' }
require('extend-export')(_ExtendExport, 'enhancement');	*/
})
```

#### Parse file and apply export extension

```js
var extendExport = require('extend-export')
var parsedText = extendExport().parseFileSync("module.export = { foo: 'bar' }", 'enhancement')
console.log(parsedText) /* produces
var _ExtendExport = { foo: 'bar' }
require('extend-export')(_ExtendExport, 'enhancement');	*/
})
```

## Rights

Copyright (C) 2015 by Yieme, License: MIT

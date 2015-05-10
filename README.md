# extend-export

Extend a module.export

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
var parse  = require('extend-export')().parse
var parsed = parse("module.export = { foo: 'bar' }", 'enhancement')
console.log(parsed) /* produces:
var _ExtendExport = { foo: 'bar' }
require('extend-export')(_ExtendExport, 'enhancement');
*/
```

#### Parse file and apply export extension

```js
var parseFile = require('extend-export')().parseFile
parseFile("module.export = { foo: 'bar' }", 'enhancement', function (err, parsedText) {
console.log(parsedText) /* produces:
var _ExtendExport = { foo: 'bar' }
require('extend-export')(_ExtendExport, 'enhancement');	*/
})
```

#### Parse file and apply export extension

```js
var parseFileSync = require('extend-export')().parseFileSync
var parsedText    = parseFileSync("module.export = { foo: 'bar' }", 'enhancement')
console.log(parsedText) /* produces:
var _ExtendExport = { foo: 'bar' }
require('extend-export')(_ExtendExport, 'enhancement');	*/
})
```

## Rights

Copyright (C) 2015 by Yieme, License: MIT

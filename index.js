/** Extend export
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     extend-export
 */
 (function() {
  'use strict';
  function ExtendExportError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }

  /** Extend export
   *  @class
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function extendExportClass(options) {
    /*jshint validthis: true */
    var self = this
    options = options || {}
    self.value = 'Hello, world'
    return self
  }



  /** Extend export
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function extendExport(options) {
    return new extendExportClass(options)
  }


  module.exports = extendExport
})();

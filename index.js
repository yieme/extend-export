/** Extend export
 *
 *  @copyright  Copyright (C) 2015 by yieme
 *  @module     extend-export
 *
 *  @example    extendExport().parse('module.export = { foo: 'bar' }', 'enhancement')
 *
 *  var _ExtendedExport = { foo: 'bar' }
 *  require('extendExport')(_ExtendedExport, 'enhancements')
 *
 */
(function() {
  'use strict';

  var _  = require('lodash')
  var fs = require('fs')

  function ExtendExportError(message) { // ref: https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript
    /*jshint validthis: true */
    this.constructor.prototype.__proto__ = Error.prototype
    Error.captureStackTrace(this, this.constructor)
    this.name = this.constructor.name
    this.message = message
  }

  /** Extend export
   *  @constructor
   *  @param      {object} options - The options
   *  @return     {object}
   */
  function extendExport(Export, extension) {
    function parse(text, extension) {
      if (typeof text === 'string') {
        var spacing = ['', ' ', '  ', '   ', "\t"]
        for (var i=0, len=spacing.length; i< len; i++) {
          var search = 'module.export' + spacing[i] + '='
          var part = text.split(search)
          if (part[1]) {
            text = part.join('var _ExtendExport =')
            break
          }
        }
        if (typeof extension === 'string') {
          text += "\nrequire('extend-export')(_ExtendExport, '" + extension + "');"
        }
      }
      return text
    }

    function parseFile(filepath, callback) {
      fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
          callback(err)
        } else {
          callback(null, parse(data))
        }
      })
    }

    function parseFileSync(filepath) {
      try {
        var text = fs.readFileSync(filePath, 'utf8')
        return parse(text)
      } catch (err) {
        throw new ExtendExportError(err.message)
      }
    }

    if (!Export) {
      return {
        parse:         parse,
        parseFile:     parseFile,
        parseFileSync: parseFileSync
      }
    }

    try {
      if (typeof extension === 'string') {
        extension = require(extension)
      }
      return _.merge(Export, extension)
    } catch (err) {
      throw new ExtendExportError(err.message)
    }
  }


  module.exports = extendExport
})();

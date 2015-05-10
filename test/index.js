var should = require('chai').should(),
    extendExport = require('..');
var result = "var _ExtendExport = { foo: 'bar' }\nrequire('extend-export')(_ExtendExport, 'enhancement');";

describe('extend-export', function() {
  it('should parse', function(done) {
    var test = extendExport().parse("module.export = { foo: 'bar' }", 'enhancement')
    test.should.equal(result);
    done();
  });
});

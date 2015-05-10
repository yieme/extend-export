var should = require('chai').should(),
    extendExport = require('..')
;

describe('extend-export', function() {
  it('should say hello', function(done) {
    var test = extendExport()
    test.value.should.equal('Hello, world');
    done();
  });
});

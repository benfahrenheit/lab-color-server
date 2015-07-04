/// <reference path="../typings/mocha/mocha.d.ts"/>
var assert = require('assert');

// Yeah, I know this doesn't have anything to do with this code.
// Just playing around with some samples :)

describe('Array', function() {
	describe('#indexOf()', function() {
		it('should return -1 when the value is not present', function() {
			assert.equal(-1, [1,2,3].indexOf(5));
		});
	});
});
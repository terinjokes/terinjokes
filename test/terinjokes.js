'use strict';
var test = require('tape'),
		terinjokes = require('../');

test('terinjokes', function(t) {
	t.plan(2);
	t.equals(typeof terinjokes, 'function', 'should be a function');

	var joke = terinjokes();
	t.equals(typeof joke, 'string', 'should be a string');
});

/* global describe, it*/
'use strict';
var chai = require('chai'),
		expect = chai.expect,
		terinjokes = require('../');

describe('terinjokes', function() {
	it('should export a function', function() {
		expect(terinjokes).to.be.a('function');
	});

	it('should return a joke', function() {
		var joke = terinjokes();
		expect(joke).to.be.a('string');
	});

	it('should be funny', function() {
		/* jshint expr:true*/
		var joke = terinjokes();
		expect(joke.laugher).to.exist;
	});
});

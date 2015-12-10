"use strict";

var fmtr = require('../');
var expect = require('expect.js');

describe('fmtr', function () {

    it('should return empty string with no arguments', function () {
        expect(fmtr()).to.be('');
    });

    it('should return input string when object is empty or not given', function () {
        expect(fmtr('hello')).to.be('hello');
        expect(fmtr('hello'), null).to.be('hello');
        expect(fmtr('hello'), undefined).to.be('hello');
    });

    it('should return input string when no place holders are specified', function () {
        expect(fmtr('', { hello: 'world' })).to.be('');
        expect(fmtr('howdy', { hello: 'world' })).to.be('howdy');
    });

    it('should fill in place holders with values from the object', function () {
        expect(fmtr('Xx ${hello} xX', { hello: 'world' })).to.be('Xx world xX');
    });

});
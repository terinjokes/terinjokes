#!/usr/bin/env node
'use string';
var fs = require('fs');
var path = require('path');
var lpad = require('leftpad');

var d = new Date();
var year = String(d.getUTCFullYear()).substring(2);
var month = lpad(d.getUTCMonth() + 1, 2);

var version = '\'use strict\';\nmodule.exports = \'' + year + month + '\';\n';

fs.writeFileSync(path.resolve(__dirname, '../version.js'), version, 'utf8');


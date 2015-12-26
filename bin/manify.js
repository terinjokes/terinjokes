#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');

var remark = require('remark');
var man = require('remark-man');
var VERSION = require('../version');

var mdLoc = path.join(__dirname, '../man/terinjokes.7.md');
var manLoc = path.join(__dirname, '../man/terinjokes.7');

var processor = remark().use(man, {
  version: VERSION
});

var roff = processor.process(fs.readFileSync(mdLoc, 'utf8'));

fs.writeFileSync(manLoc, roff, 'utf8');

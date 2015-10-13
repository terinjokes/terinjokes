#!/usr/bin/env node
'use strict';
var minimist = require('minimist');
var terinjokes = require('../');
var args = minimist(process.argv.slice(2));

var CPERS = 20; // # of characters for each sec
var MINW = 6; // minimum wait if desired

var joke = terinjokes();
var timeout;

if (args['?']) {
  printVersion();
  printUsage();
  return;
}

if (args.v) {
  printVersion();
  return;
}

console.log(joke);

if (args.w) {
  timeout = Math.max(joke.length / CPERS, 6);
  setTimeout(function() {}, timeout * 1000);
}

function printVersion() {
  console.log('terinjokes version ' + terinjokes.VERSION);
}

function printUsage() {
  console.log('terinjokes [-w]');
}

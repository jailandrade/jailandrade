#! /usr/bin/env node

var jsonfile = require('jsonfile');

var util = require('util');

var file = 'data.json';

var obj = {name: 'JP'};

jsonfile.writeFile(file, obj, {spaces: 2}, function(err){
    console.error(err);
});

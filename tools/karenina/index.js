#! /usr/bin/env node

var chalk 		= require('chalk'),
    commander 	= require('commander'),
    async 		= require('async'),
    _ 			= require('underscore'),
    debug 		= require('debug'),
    bluebird 	= require('bluebird');

// Ask for what kind of tool, generator or boilerplate is need to generate

commander
	.version('0.0.1')
	.option('-g, --generators', 'Use generators')
	.option('-b, --boilerplates', 'Use boilerplates')
	.option('-t, --tools', 'Use tools')
	.parse(process.argv);

console.log('Hi Jail, what do you want use/create today');

if (commander.generators) {
	console.log('Using generators');
}
if (commander.boilerplates) {
	console.log('Using boilerplates');
}
if (commander.tools) {
	console.log('Using tools');
}

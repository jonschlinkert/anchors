/**
 * No tests yet. just a placeholder.
 */

var file = require('fs-utils');
var anchors = require('../');


// Test setup
var fixtures = 'test/fixtures/html/about.html';
var files = file.expand(fixtures, {filter: 'isFile'});
var a = anchors(files);


console.log(JSON.stringify(a, null, 2));



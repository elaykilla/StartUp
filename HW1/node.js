#!/usr/bin/env node
var fs = require('fs');
var outfile = "hello.txt";
var out = "A startup is a buisiness built to grow rapidly. \n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote:" + out + "To: "+ outfile);

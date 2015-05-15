#!/usr/bin/env node
var pictureTube = require('picture-tube')
var tube = pictureTube({cols: 65});
tube.pipe(process.stdout);

var fs = require('fs');
fs.createReadStream(__dirname + '/img/ymzkmct.png').pipe(tube);

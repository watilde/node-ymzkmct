var pictureTube = require('picture-tube')
var tube = pictureTube({cols: 65});
tube.pipe(process.stdout);

var fs = require('fs');
fs.createReadStream('img/ymzkmct.png').pipe(tube);

module.exports = function (cb) {
  tube.pipe(cb);
};

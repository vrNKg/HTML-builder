const fs = require('fs'),
path = require('path'),
file = new fs.ReadStream(path.join(__dirname, 'text.txt'), 'utf-8');

file.on('readable', function(){
    let data = file.read();
    console.log(data);
});
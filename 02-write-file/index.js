const fs = require('fs'),
path = require('path'),
{ stdin, stdout } = require('process'),
file = path.join(__dirname, 'text.txt'),
output = new fs.WriteStream(file);

stdout.write('Привет! Введи, пожалуйста, текст: ');

function sayBye() {
    stdout.write('\nПока!');
    process.exit();
};

stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        sayBye()
    }
    output.write(data)
});

process.on('SIGINT', sayBye);




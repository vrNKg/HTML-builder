const fs = require('fs'),
fsPromises = require('fs/promises'),
path = require('path'),
filesCopyPath = path.join(__dirname, 'files-copy'),
filesPath = path.join(__dirname, 'files'),
filesCopy = fsPromises.copyFile;


function copyDir() {
    fs.mkdir((filesCopyPath), { 
        recursive: true,
    }, err => {
        if (err) {
            throw new Error('Папка с таким именем уже существует');
        }
        console.log('Папка создана')
    });
    
    fsPromises
    .readdir(filesPath)
    .then(files => {
        for (const file of files) {
            const filePath = path.join(filesPath, file);
            filesCopy(filePath, path.join(filesCopyPath, file));
            console.log(file)
        }});
    };

copyDir()
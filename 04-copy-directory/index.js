const fs = require('fs'),
fsPromises = require('fs/promises'),
path = require('path'),
filesCopyPath = path.join(__dirname, 'files-copy'),
filesPath = path.join(__dirname, 'files'),
filesCopy = fsPromises.copyFile;


(function copyDir() {
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
        files.forEach(file => {
            const filePath = path.join(filesPath, file);
            (filePath, path.join(filesCopyPath, file));
            console.log(file)
        });
    });
})();

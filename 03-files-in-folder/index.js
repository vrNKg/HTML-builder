const fsPromises = require('fs/promises'),
path = require('path'),
folder = path.join(__dirname, 'secret-folder');

fsPromises.readdir(folder, {withFileTypes: true}).then(files => {
        files.forEach(file => {
            if (file.isFile()) {
                const filePath = path.join(folder, file.name),
                fileName = path.basename(filePath),
                extName = path.extname(filePath);
                fsPromises
                .stat(filePath)
                .then(res => {
                    console.log(`${fileName.replace(extName, '')} - ${extName.replace('.', '')} - ${Number(res.size)}b`);
                });
            }
        });
    });
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'secret-folder');

fs.readdir(filePath, { withFileTypes: true }, (err, files) => {
    console.log("\nCurrent directory files:\n");
    if (err) {
        throw err;
    }
    
    files.forEach(file => {
        if(file.isFile()) {
            let f = [];
            f.push(file.name);

            let str = '';
            str = f.join('').replace(/\./, ' - ');
            
            fs.stat(filePath + '/' + file.name, (err, stats) => {
                if (err) {
                    throw err;
                }
                let num = Number(stats.size) * 0.001;

                console.log(str + ' - ' + num + "kb");
            })

        }

    })

});

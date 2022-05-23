const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;

const filePath = path.join(__dirname, 'text.txt');

fs.unlink(filePath, (err) => {
     if (err) {
         
     }
});

stdout.write('Здравствуйте! Введите текст:\n');

stdin.on('data', data => {

    let write = data.toString();

    if (write == 'exit\n') {
        process.exit(process.on('exit', () => {
            stdout.write('Good bye!\n');
        }));
    };

    fs.appendFile(filePath, write, err => {
        if (err) {
            throw err;
        }

    stdout.write('Введенный текст записан в созданный файл. Введите текст или завершите программу...\n');

    });
});

process.on('SIGINT', () => {
    process.exit(process.on('exit', () => {
        stdout.write('\nGood bye!\n');
    }));
})


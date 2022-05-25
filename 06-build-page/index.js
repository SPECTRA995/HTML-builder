const fs = require('fs');
const path = require('path');
const { mkdir } = require('fs/promises');
const fsPromises = require('fs/promises');

const copyStyles = path.join(__dirname, 'project-dist', 'style.css');
const Styles = path.join(__dirname, 'styles');
const template = path.join(__dirname);
const copyStyl = path.join(__dirname, 'project-dist');
const indexHtml = path.join(copyStyl, 'index.html');

let temp = '';

(async function () {

    try {
        // Создание папки "project-dist"
        await mkdir(path.join(__dirname, 'project-dist'), {recursive: true}, (err) => {
            
            if (err) {
                
                throw err;
                
            }

        });
        // Создание папки "assets"
        mkdir(path.join(__dirname, 'project-dist', 'assets'), {recursive: true}, (err) => {
            
            if (err) {
                
                throw err;
                
            }

        });
        // Создание папки "fonts"
        mkdir(path.join(path.join(__dirname, 'project-dist', 'assets'), 'fonts'), {recursive: true}, (err) => {
            
            if (err) {
                
                throw err;
                
            }

        });

        //Обновление папки "fonts"
        fs.readdir(path.join(path.join(__dirname, 'project-dist', 'assets'), 'fonts'), { withFileTypes: true } , (err, files) => {
        
            if (err) {
                
                throw err;

            }
    
            files.forEach(file => {
                
                if(path.extname(file.name) == '.woff2'){
    
                    fs.unlink(path.join(path.join(__dirname, 'project-dist', 'assets', 'fonts'), file.name), err => {
                        
                        if (err) {
                            
                            throw err;
    
                        }    
    
                    });
    
                };
    
            });
    
        });


        // Создание папки "img"
        mkdir(path.join(path.join(__dirname, 'project-dist', 'assets'), 'img'), {recursive: true}, (err) => {
            
            if (err) {
                
                throw err;
                
            }

        });

        //Обновление папки "img"
        fs.readdir(path.join(path.join(__dirname, 'project-dist', 'assets'), 'img'), { withFileTypes: true } , (err, files) => {
        
            if (err) {
                
                throw err;

            }
    
            files.forEach(file => {
                
                if(path.extname(file.name) == '.jpg'){
    
                    fs.unlink(path.join(path.join(__dirname, 'project-dist', 'assets', 'img'), file.name), err => {
                        
                        if (err) {
                            
                            throw err;
    
                        }    
    
                    });
    
                };
    
            });
    
        });


        // Создание папки "svg"
        mkdir(path.join(path.join(__dirname, 'project-dist', 'assets'), 'svg'), {recursive: true}, (err) => {
            
            if (err) {
                
                throw err;
                
            }

        });

        //Обновление папки "svg"
        fs.readdir(path.join(path.join(__dirname, 'project-dist', 'assets'), 'svg'), { withFileTypes: true } , (err, files) => {
        
            if (err) {
                
                throw err;

            }
    
            files.forEach(file => {
                
                if(path.extname(file.name) == '.svg'){
    
                    fs.unlink(path.join(path.join(__dirname, 'project-dist', 'assets', 'svg'), file.name), err => {
                        
                        if (err) {
                            
                            throw err;
    
                        }    
    
                    });
    
                };
    
            });
    
        });


        //Обновление папки "project-dist"
        fs.readdir(path.join(__dirname , 'project-dist'), { withFileTypes: true } , (err, files) => {
        
            if (err) {
                
                throw err;
            }
    
            files.forEach(file => {
                
                if(path.extname(file.name) == '.css'){
    
                    fs.unlink(path.join(path.join(__dirname, 'project-dist'), file.name), err => {
                        
                        if (err) {
                            
                            throw err;
    
                        }    
    
                    });
    
                };
    
            });
    
        });
    
    
        fs.readdir(Styles, { withFileTypes: true }, (err, files) => {
            
            if (err) {
                
                throw err;
    
            }
    
            files.forEach(file => {
    
                if(path.extname(file.name) == '.css') {
                    
                    fs.readFile(Styles + '/' + file.name, "utf-8", (err, files) => {
                        
                        if (err) {
    
                            throw err;
    
                        } else {
                            
                            let text = '';
                            text = files;
                            
                            fs.appendFile(copyStyles, text, (err) => {
                                
                                if (err) {
                                    
                                    throw err;
                                
                                }
                                
                            })
                        
                          }
                    
                    })
                        
                }
    
            })
        })


        fs.readdir(path.join(__dirname, 'assets', 'fonts'), (err, files) => {

            if (err) {

                throw err;

            }

            files.forEach(file => {
                // console.log('Откуда: ' +   path.join(path.join(__dirname, 'assets', 'fonts'), file)   );
                // console.log('Куда:   ' +  path.join(path.join(__dirname, 'project-dist', 'assets', 'fonts'), file)  );

                fs.copyFile(path.join(path.join(__dirname, 'assets', 'fonts'), file), path.join(path.join(__dirname, 'project-dist', 'assets', 'fonts'), file), err => {

                    if (err) {

                        throw err;

                    }
                })
            })
        })

        fs.readdir(path.join(__dirname, 'assets', 'img'), (err, files) => {

            if (err) {

                throw err;

            }

            files.forEach(file => {
                // console.log('Откуда: ' +   path.join(path.join(__dirname, 'assets', 'img'), file)   );
                // console.log('Куда:   ' +  path.join(path.join(__dirname, 'project-dist', 'assets', 'img'), file)  );

                fs.copyFile(path.join(path.join(__dirname, 'assets', 'img'), file), path.join(path.join(__dirname, 'project-dist', 'assets', 'img'), file), err => {

                    if (err) {

                        throw err;

                    }
                })
            })
        })


        fs.readdir(path.join(__dirname, 'assets', 'svg'), (err, files) => {

            if (err) {

                throw err;

            }

            files.forEach(file => {
                // console.log('Откуда: ' +   path.join(path.join(__dirname, 'assets', 'svg'), file)   );
                // console.log('Куда:   ' +  path.join(path.join(__dirname, 'project-dist', 'assets', 'svg'), file)  );

                fs.copyFile(path.join(path.join(__dirname, 'assets', 'svg'), file), path.join(path.join(__dirname, 'project-dist', 'assets', 'svg'), file), err => {

                    if (err) {

                        throw err;

                    }
                })
            })
        })


        ///////////////////////////////////////////////////////////////////

        //Копирование содержимого файла "template.html" в файл "index.html"
        fs.readdir(template, { withFileTypes: true }, (err, files) => {
        
            if (err) {
                
                throw err;
    
            }
    
            files.forEach(file => {
    
                if(path.extname(file.name) == '.html') {
                    
                    fs.readFile(template + '/' + file.name, "utf-8", (err, files) => {
                        
                        if (err) {
    
                            throw err;
    
                        } else {
                            
                            let text = '';
                            text = files;

                            fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), text, (err) => {
                                
                                if (err) {
                                    
                                    throw err;
                                
                                }
                                
                            })
                        
                          }
                    
                    })
                        
                }
    
            })
        })


        //Читаем файлы папки "components"

        fs.readdir(path.join(__dirname, 'components'), { withFileTypes: true }, (err, files) => {
        
            if (err) {
                
                throw err;
    
            }
    
            files.forEach(file => {
    
                if(path.extname(file.name) == '.html') {
                    
                    fs.readFile(path.join(__dirname, 'components') + '/' + file.name, "utf-8", (err, files) => {

                        
                        
                        if (err) {
    
                            throw err;
    
                        } else {
                            
                            let text = '';
                            text = files;
                            
                            // fs.appendFile(copyPath, text, (err) => {
                                
                            //     if (err) {
                                    
                            //         throw err;
                                
                            //     }
                                
                            // })

                            // console.log(file.name, text);
                            
                          }
                    
                    })
                        
                }
    
            })
        })

    } catch (error) {

        console.error(error);

    }

})(path.join(__dirname, 'files'));


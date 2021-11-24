const fs = require('fs');

//read files
// fs.readFile('./hello.txt', (err, data) => {//the function will fire when the readFire is completed(asynchronous function, take some time to finish)
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// });

console.log("last line");

//writing files
// fs.writeFile('./hello.txt', 'hello world', () => { console.log('file was written') });


//directories
if (!fs.existsSync('./asset')) {
    fs.mkdir('./asset', (err) => {
        if (err)
            console.log(err);
        console.log('folder has created.');
    });
}
else {
    fs.rmdir('./asset', (err) => {
        if (err)
            console.log(err);
        console.log('folder deleted');
    })
}

//deleting files
if (fs.existsSync('./hello1.txt')) {
    fs.unlink('./hello1.txt', (err) => {
        if (err)
            console.log(err);
        console.log('file deleted');
    });
}

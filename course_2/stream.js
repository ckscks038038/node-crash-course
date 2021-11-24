const fs = require('fs');

const readStream = fs.createReadStream('./docs/streamblog.txt');
const writeStream = fs.createWriteStream('./docs/blogout.txt');
//"on" is an event listener 
// readStream.on('data', (chunk) => {
//     console.log("----new chunk----");
//     console.log(chunk.toString());
//     writeStream.write('\nNEW CHUNK\n');
//     writeStream.write(chunk.toString());


// });

//piping
readStream.pipe(writeStream);
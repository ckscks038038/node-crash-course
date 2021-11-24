const xyz = require('./people'); //require load other file in here.
const { peo, ag } = require('./people');
console.log(peo);

const os = require('os');
console.log(os.platform(), os.homedir());
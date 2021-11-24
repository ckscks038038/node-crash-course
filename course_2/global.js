//console.log(global);
setTimeout(() => {  // only run for one time
    console.log('in the timeout');
    clearInterval(int);
}, 3110);

const int = setInterval(() => {  //run the function every few second 
    console.log('in the interbal');
}, 1000);

console.log(__dirname); // useful when interacting with different files
console.log(__filename);
//hellohello
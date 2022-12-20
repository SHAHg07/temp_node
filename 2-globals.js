// GLOBALS   - NO WINDOW !!!!


// __dirname  - path to the current directory
console.log(__dirname);
// __filename  - file name
console.log(__filename);
//  require    - function to use modules
console.log(require);
//  module   -  info about current module
console.log(module);
// process  - info about env where the program is being executed

// we can also use set interval and set timeout

setInterval(()=>{
    console.log('hello world');
},1000)

setTimeout(()=>{
    console.log("hello zeba");
},1000)
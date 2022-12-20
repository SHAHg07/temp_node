// os modules 


const { log } = require('console')
const os = require('os')

const user = os.userInfo()
console.log(user);


// method to return system up time
console.log(`the system up time is ${os.uptime()} seconds `);


const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS);
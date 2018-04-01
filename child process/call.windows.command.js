const spawn  = require('child_process').spawn;
const utf8 = require('utf8');

//const  ping  = spawn('ping',['8.8.8.8']);

//ping.stdout.setEncoding('utf8');

const  ipconfig  = spawn('ipconfig');

ipconfig.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ipconfig.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    process.exit();
});

ipconfig.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
    process.exit(1);
});


import {program } from 'commander';

program
    .option("-m, --mode <mode>","Ambiente a ejecutar","dev")
    .option("-p, --port <port>","Puerto a ejecutar",8080)
    .option("-d, --debug","Modo debug",false)
    .parse()

// console.log("options:", program.opts());
// log("others options:", program.args);
export default program
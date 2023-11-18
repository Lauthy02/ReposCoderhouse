import { config } from "./config.js";
console.log(config)
const port = config.port
console.log(port)

//console.log("process:", process);
console.log("--------------------");
console.log("argv:", process.argv);
console.log("--------------------");
console.log("argv:", process.argv[2]);
const env = process.argv[2]

switch (env) {
    case "dev":
        console.log("Estamos en desarrollo");
        break;
    case "prod":
        console.log("Estamos en produccion");
        break;
    case "test":
        console.log("Estamos en test");
        break;
    default:
        console.log("No se encontro el entorno");
        break;
}

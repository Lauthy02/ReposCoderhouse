import ToysFile from '../DAOs/fileDAO/toys.manager.js'
import ToysMem from '../DAOs/memoryDAO/toys.manager.js'

let toysManager
const persistenceType = process.argv[2]
switch (persistenceType) {
    case "MEMORY":
        toysManager = new ToysMem()
        break;
    case "FILE":
        toysManager = new ToysFile()
        break;
    default:
        break;
}

export default toysManager
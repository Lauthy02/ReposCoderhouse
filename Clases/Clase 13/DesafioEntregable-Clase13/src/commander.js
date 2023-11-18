import { program } from 'commander'

program
    .option("-m, --mode <mode>", "Ambiente a ejecutar", "dev")
    .parse()

export default program
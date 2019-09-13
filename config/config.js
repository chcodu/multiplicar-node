const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'lista las tablas de multiplicar', opt)
    .command('crear', 'crea las tabla de multiplicar', opt)
    .help()
    .argv;


module.exports = {
    argv
}
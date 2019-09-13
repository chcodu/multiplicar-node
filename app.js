//Obtener valores de consola con Yargs
let argv = require('./config/config').argv;
const colors = require('colors');



let { crearArchivo, listarTabla } = require('./multiplicar');



//Obtener parámetros de la consola
// let base = process.argv[2];
// let parametro = base.split('=')[1];
//Comando consola: node app --base=numero.


let comando = argv._[0];


switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(result => {
            console.log('Archivo Creado: ' + result.green);
        }).catch((err) => {
            console.log(err);
        });
        break;
    case 'borrar':

        break;
    default:
        break;
}
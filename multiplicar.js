const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            return reject('El valor base no es un número');
        }
        if (!Number(limite)) {
            return reject('El limite no es un número');
        }

        console.log('=========================='.green);
        console.log(`Tabla de multiplicar del ${base}`.green);
        console.log('=========================='.green);


        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        return resolve(data);
    });
}



let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            return reject('El valor no es un número');
        }

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${(base * index)} \n`;
        }

        fs.writeFile(`./tabla/tabla-${base}.txt`, data, (err) => {

            if (err) {
                return reject(err);
            } else {
                return resolve(`tabla-${base}.txt`);
            }
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
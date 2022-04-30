// Comentário: Código implementado corretamente. Nota 2.0

const fs = require('fs');

function readFile(filename) {
  return new Promise(function (resolve, reject) {
    fs.readFile(filename, function (error, data) {
      resolve(parseInt(data));
    });
  });
}

async function calcularValor() {
  let valor1 = await readFile('1.txt');
  let valor2 = await readFile('2.txt');
  let valor3 = await readFile('3.txt');
  console.log(valor1 + valor2 + valor3);
}

calcularValor();

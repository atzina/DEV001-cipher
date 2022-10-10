import cipher from './cipher.js';

console.log(cipher);

let resultado = document.getElementById('spancifrado');

document.getElementById("botonDos").addEventListener('click', cifrar);

function cifrar(){
  const string = document.getElementById('string').value;
  const offset = parseInt(document.getElementById('offset').value);

  resultado.innerHTML= cipher.encode(offset, string);

}


let resultadoUno = document.getElementById('spandecifrado');

document.getElementById('botonUno').addEventListener('click', decifrar);

function decifrar(){
  const stringUno = document.getElementById('stringUno').value;
  const offsetUno = parseInt(document.getElementById('offsetUno').value);

  resultadoUno.innerHTML = cipher.decode(offsetUno, stringUno);
}

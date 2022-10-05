import cipher from './cipher.js';

console.log(cipher);

let resultado = document.getElementById("spancifrado");

document.getElementById("botonDos").addEventListener("click", cifrar);

function cifrar(){
  const string = document.getElementById("string").value;
  const offset = document.getElementById("offset").value;

  resultado.innerHTML= cipher.encode(offset, string);

}


let resultadoUno = document.getElementById("spandecifrado");

document.getElementById("botonUno").addEventListener("click", decifrar);

function decifrar(){
  const stringUno = document.getElementById("stringUno").value;
  const offfsetUno = document.getElementById("offfsetUno").value;

  resultadoUno.innerHTML = cipher.decode(offfsetUno, stringUno);
}

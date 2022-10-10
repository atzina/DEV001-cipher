
const cipher = {

encode:  function(offset, string) {
  if(typeof offset !== 'number'|| typeof string !== 'string'){
    throw new TypeError ('incorrect');
  }
  let cifradaConClave = "";//resultado
  let palabraConClave = "";


    for(var i=0; i<string.length; i++){

      let palabraAscci = string.charCodeAt(i);
      console.log(palabraAscci);

      if (palabraAscci>=65 && palabraAscci<=90){
      palabraConClave= ((palabraAscci - 65 + parseInt(offset)) % 26) + 65;
      console.log(palabraConClave)
        //cifradaConClave=string.charCodeAt(i) - 65 +parseInt(offset))%26)+65;

      }else if(palabraAscci === 32){
        palabraConClave =32;

      }

      cifradaConClave += String.fromCharCode(palabraConClave);
          console.log(cifradaConClave);
      //cifradaConClave = String.fromCharCode(palabraConClave);
      //let cifradaConClave= String.fromCharCode(((palabraAscci-65+offset)%26)+65);
      //document.getElementById('spancifrado').innerHTML=cifradaConClave;
    }
return cifradaConClave;



},
decode: function(offsetUno, stringUno) {
  if(typeof offsetUno !== 'number'|| typeof stringUno !== 'string'){
    throw new TypeError ('incorrect');
  }

  let decifradaConClave = "";//resultado
  let acertijoSinClave = "";

  for(var i=0; i<stringUno.length; i++){
    let acertijoAscci= stringUno.charCodeAt(i);

    if(acertijoAscci>=65 && acertijoAscci<=90){
        acertijoSinClave = ((acertijoAscci + 65 - parseInt(offsetUno))%26) + 65;

    }else if(acertijoAscci===32) {
      acertijoSinClave =32;

    }

    decifradaConClave += String.fromCharCode(acertijoSinClave);
  }
  return decifradaConClave;




}

};

export default cipher;

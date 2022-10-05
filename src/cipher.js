
const cipher = {

encode:  function(offset, string) {


  let cifradaConClave = " ";//resultado
  let palabraConClave = " ";


    for(var i=0; i<string.length; i++){

      let palabraAscci = string.charCodeAt(i);
      console.log(palabraAscci);

      if (palabraAscci>=65 && palabraAscci<=90){
      palabraConClave= ((palabraAscci - 65 + parseInt(offset)) % 26) + 65;
      console.log(palabraConClave)
        //cifradaConClave=string.charCodeAt(i) - 65 +parseInt(offset))%26)+65;

      }else if(palabraAscci === 32){
        cifradaConClave - 32;

      }

      cifradaConClave += String.fromCharCode(palabraConClave);
          console.log(cifradaConClave);
      //cifradaConClave = String.fromCharCode(palabraConClave);
      //let cifradaConClave= String.fromCharCode(((palabraAscci-65+offset)%26)+65);
      //document.getElementById('spancifrado').innerHTML=cifradaConClave;
    }
return cifradaConClave;



},
decode: function(offfsetUno, stringUno) {

  let decifradaConClave = " ";

  for(var i=0; i<stringUno.length; i++){
    let acertijoAscci= stringUno.charCodeAt(i);
    let acertijoConClave = ((acertijoAscci + 65 - parseInt(offfsetUno))%26) + 65;
    decifradaConClave += String.fromCharCode(acertijoConClave);
  }
  return decifradaConClave;




}

};

export default cipher;

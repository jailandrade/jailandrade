/** Funcion que cuenta las letras B mayusculas y regresa el numero de estas
 * @param cadena
 * return {int} numeroBs
 */
function countBs(cadena){
  var numeroBs = 0;
  for(var i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) == 'B')
      numeroBs++;
  }
  return numeroBs;
}



function countChar(cadena, letra){
  var numeroLetras = 0;
  cadena = cadena.toUpperCase();
  letra = letra.toUpperCase();
  for(var i = 0; i < cadena.length; i++){
    if(cadena.charAt(i) == letra)
      numeroLetras++;
  }
  return numeroLetras;
}

console.log(countBs("Baco"));
console.log(countChar("Mmmmmmm", "m"));

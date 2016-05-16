/**
 * Funciones usadas en Capitulo 2 de Eloquent JavaScript
 */


/**
 * Funcion que cuenta las letras B mayusculas y regresa el numero de estas
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
console.log(countBs("Baco"));

/**
 * Funcion que cuenta las letras N y regresa
 * el numero de estas que se encuentran en una cadena
 * @param cadena
 * return {int} numeroLetras
 */
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
console.log(countChar("Mmmmmmm", "m"));


/**
 * @param target
 * return {string} resultado
 */
function findSolution(target) {
  function find(start, history) {
    if (start == target)
      return history;
    else if (start > target)
      return null;
    else
      return find( start + 5, "(" + history + " + 5 )" ) || find( start * 3, "(" + history + " * 3");
  }
  return find(1, "1");
}
console.log(findSolution(24));


/**
 * Funcion que añade 0 y numero de etiquetas
 * @param number
 * @param etiqueta
 */
function ceroConEtiqueta(number, etiqueta){
  var numeroString = String(number);
  while (numeroString.length < 4)
    numeroString = "0" + numeroString;
  console.log(numeroString + " " + etiqueta);
}

/**
 * Funcion
 * @param vacas
 * @param pollos
 * @param cerdos
 */
function imprimeInventorioAnimales(vacas, pollos, cerdos){
  ceroConEtiqueta(vacas, "pollos");
  ceroConEtiqueta(pollos, "vacas");
  ceroConEtiqueta(cerdos, "cerdos");
}
imprimeInventorioAnimales(1, 2, 3);

/**
 * Funcion
 * @param vacas
 * @param pollitos
 */
function imprimeNumeroAnimales(vacas, pollitos){
  var vacasString = String(vacas);
  while (vacasString.length < 3)
    vacasString = "0" + vacasString;
  console.log(vacasString + " vacas");

  var pollitosString = String(pollitos);
  while (pollitosString.length < 3)
    pollitosString = "0" + pollitosString;
  console.log(pollitosString + " pollitos");
}
imprimeNumeroAnimales(10, 10);

/**
 * Funcion que dice si un numero es par
 * @param n
 * return {boolean}
 */
function isEven(n){
  var even = n % 2;
  if(even == 0)
    return true;
  else
    return false;
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

/**
 * Funcion que dados dos numeros dice cual es menor y mayor
 * @param a
 * @param b
 * return {int} min
 */
function minimum(a, b){
  return Math.min(a, b);
}
console.log(minimum(-4, 8));

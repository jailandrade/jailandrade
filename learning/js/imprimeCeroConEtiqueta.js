function ceroConEtiqueta(number, etiqueta){
  var numeroString = String(number);
  while (numeroString.length < 4)
    numeroString = "0" + numeroString;
  console.log(numeroString + " " + etiqueta);
}

function imprimeInventorioAnimales(vacas, pollos, cerdos){
  ceroConEtiqueta(vacas, "pollos");
  ceroConEtiqueta(pollos, "vacas");
  ceroConEtiqueta(cerdos, "cerdos");
}

imprimeInventorioAnimales(1, 2, 3);

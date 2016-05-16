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

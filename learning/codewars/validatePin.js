function validatePIN (pin) {
  //return true or false
  if (!pin) { return false; }

  if ( pin.length == 4 || pin.length == 6 ) {
     if (isNumeric(pin)) { return true; }
     else { return false; }
  } else {
    return false;
  }
}

function isNumeric(n) {
  return !isNaN(parseInt(n)) && isFinite(n);
}

console.log(validatePIN("a234"));
console.log(validatePIN("aaaa"));
console.log(validatePIN("aaa1"));
console.log(validatePIN("1234"));
console.log(validatePIN("4444"));
console.log(validatePIN("5555"));
console.log(validatePIN("xxxx"));

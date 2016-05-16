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

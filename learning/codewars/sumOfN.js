function sumOfN(n) {
  var a, b = [0];
  var abs = Math.abs(n);
  if ( n > 0 ) {
    for (var i = 1; i <= abs; i++) {
      a.push(i+a[i-1]); 
    }
  } else {
    for (var i = 1; i <= abs; i++) {
      b.push(i+b[i-1]);
    }
    a = b.map(function(num){
      return num * -1;
    });
  }
  return a;
};

console.log(sumOfN(5));

function collatz(n){
  v = 1;
  while ( n > 1 ) {
    v++;
    console.log(n);
    if ( n % 2 == 0 ) { n = n / 2; } 
    else { n = (n * 3) + 1; }
  
  }
  return v;
}

console.log( collatz(20));

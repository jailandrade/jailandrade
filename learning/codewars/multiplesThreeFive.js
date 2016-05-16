function solution(number){
  var s = 0;
  console.log(number);
  for ( var i = 1; i < number; i++ ) {
    console.log(i);
    i (i % 3 == 0) {
      s = s + i;
      console.log(s);
    }
  }
  
  return s;
}

console.log(solution(10));

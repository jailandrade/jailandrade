function multiplesOf(number) {
	var multiplys = [];
	for (var i = 0; i < number; i++){
		if ( i % 3 == 0 || i % 5 == 0) {
			multiplys.push(i);
		}
	}
	console.log(multiplys);
	return sum(multiplys);
}

function sum(multiplys) {
	var suma = 0;
	for (var i = 0; i < multiplys.length; i++) {
		sum = sum + multiplys[i];
	}

	return suma;
}

// Uncomment the new line for test
// console.log(multiplesOf(100))

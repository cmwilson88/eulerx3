var isPrime = function(x) {
	for(var i = 2; i < x; i++) {
		if(x % i === 0) {
			return false;
		}
	}
	return true;
};

var maxPrimeFactor = function(x) {
	var divisor = x - 1;

	while(divisor > 1) {
		if(x % divisor === 0 && isPrime(divisor)) {
			return divisor;
		}
		divisor--;
	}
	return x;
}

var num = 580658418;
var start= new Date().getTime();
console.log('Answer: ' + maxPrimeFactor(num));
var end = new Date().getTime();
console.log('Runtime: ' + (end-start) + 'ms');
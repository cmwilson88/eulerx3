var problem1 = function(x) {
	var sum = 0;
	for(var i = 1; i < x; i++){
		if(i % 3 === 0) {
			sum += i;
		}
		else if (i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
};

var x = 1000;

var start = new Date().getTime();
var answer = problem1(x);
var end = new Date().getTime();
console.log('Answer #1: ' + answer);
console.log('Runtime #1: ' + (end - start) + 'ms');
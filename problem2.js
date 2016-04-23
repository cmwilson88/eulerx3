var a = 1
var b = 1
var c = 0
var sum = 0

while (a < 4000000) {
	if (a % 2 ===0) {
		sum += a;
	}
	c = a + b;
	a = b;
	b = c;
};

console.log(sum);
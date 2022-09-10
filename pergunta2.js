var n = 5;

var fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;

for (var i = 2; i < 50; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}


function éFibonacciOuNão() {
    var buscaN = fibonacci.indexOf(n);
    if (buscaN == -1) {
        console.log(`O numero ${n} inserido nao faz parte da sequencia de Fibonacci!`);
    } else {
        console.log(`O numero ${n} faz parte da sequencia de Fibonacci!`);
    }
}
console.log(éFibonacciOuNão(n));





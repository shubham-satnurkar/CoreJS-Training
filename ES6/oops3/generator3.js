function *first(){
	yield 4;
	yield 5;
	yield 6;
}

function *seconnd(){
	yield 1;
	yield 2;
	yield 3;
	yield* first();
}
let x = seconnd();
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
console.log(x.next());
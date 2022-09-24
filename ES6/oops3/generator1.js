function *generator(){
	yield {name:"Shubham", age:26};
	yield 2;
	yield 3;
	yield 123
}
let gen = generator();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
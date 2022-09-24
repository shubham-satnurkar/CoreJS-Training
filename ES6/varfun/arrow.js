// Normal Function method
function greet(){
	console.log("Hello Shubham");
}
greet();


// Arrow function method
let meet = () => {
	console.log("Nice to meet you")
}
meet();

let greetings = () => console.log("Hello Greeting for the day");
greetings();

let age = 16;
let result = (age<18)?  console.log("This is Kid"): console.log("This is adult");
// console.log(result);


let add = [1,2,3,4,5,6,7,8,9,10];
let sum= 0;

add.forEach(val=>sum+=val);
console.log(sum);

let evenNo = add.filter(val =>even=val%2 == 0);
console.log(evenNo);


let square = (a)=> (a*a);
console.log(square(25));

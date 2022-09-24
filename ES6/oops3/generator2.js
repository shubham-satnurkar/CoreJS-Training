function *overrideDate(){
	let result =  yield 'Shubham';
	console.log(result);
}
let abc = overrideDate();
abc.next();
abc.next("Suraj");
console.log(abc.next());
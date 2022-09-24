let users=[
	{fname:"Shubham", lname:"Satnurkar"},
	{fname:"Suraj", lname:"Meshram"},
	{fname:"Nishant", lname:"Jadhav"},
	{fname:"Pranay", lname:"Kalbandhe"},
	{fname:"Nikhil", lname:"Thakre"},
]

let newArr =users.map((item) => {
	const xyz={};
	xyz.name=item.fname;
	xyz.age=item.lname.length*10;
	return xyz;
})

console.log(newArr);
console.log(JSON.stringify(newArr));
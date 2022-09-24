let users=[
	{fname:"Shubham", lname:"Satnurkar"},
	{fname:"Suraj", lname:"Meshram"},
	{fname:"Nishant", lname:"Jadhav"},
	{fname:"Pranay", lname:"Kalbandhe"},
	{fname:"Nikhil", lname:"Thakre"},
]

let fullName = users.map(val=>{
	return `${val.fname} ${val.lname}`
});
console.log(fullName);
console.log(JSON.stringify(fullName));
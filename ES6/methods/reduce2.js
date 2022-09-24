let emp =[ 
	{name:"Shubham",salary: 12345,dept:"IT"},
	{name:"Suraj",salary: 23456,dept:"Account"},
	{name:"Pranay",salary: 34567,dept:"IT"},
	{name:"Nikhil",salary: 45689,dept:"Account"},
	{name:"Nishant",salary: 56789,dept:"IT"},
	{name:"Raj",salary: 67890,dept:"Account"},
	{name:"Aadarsh",salary: 78901,dept:"IT"},
	{name:"Ankit",salary: 89012,dept:"Account"}
]
let empSal = emp.reduce((total, val)=>{
	return total+val.salary
},0)
console.log(empSal);
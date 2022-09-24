// let array = [1,2,3,4,5,6,7]
// let arr = [12,45,65,43,34]

// console.log(`${array}${arr}`)

// let newArr = [...array, ...arr];
// console.log(newArr);



// Assuming you already know new javascript functions like map,reduce, find,filter, foreach

// Suppose following salary array
// [45000,56000,23000,78000,57000,67000,46000,34000,35000,65000]

// 1. Traverse above array
// 2. Increment everysalary by 5000 and display resultant array
// 3. Display sum of all salaries 
// 4. Find 1st salary greater than 60000
// 5. Find all salaries greater than 60000


let salary = [45000,56000,23000,78000,57000,67000,46000,34000,35000,65000]

//Fist Task Traverse The Array 
for(let sal of salary){
	console.log(`${sal}`);
}
for(let i=0;i<salary.length;i++){
	console.log(salary[i]);
}
 salary.forEach(sal=>{
 	console.log(`${sal}`);
})

//2nd Task Increament evry salary by 5000
let increment = salary.map((sal)=> sal+5000);
console.log(increment);

// 3rd Task Sum of all Salaries
let sum = salary.reduce((total, val)=>{
	return total+val
});
console.log(sum);

// 4th Task one Salary greater than 60000
let greatValue = salary.find((num)=> num>60000);
console.log(greatValue);

// 5th Task all salaries greater than 60000
let allValue = salary.filter((val)=> val>60000);
console.log(allValue)






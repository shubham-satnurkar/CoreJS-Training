let arr = [1,2,3,4,5,6,7,8,9];
let newArr = [...arr,10,11,12,13,15, ...arr];
console.log(newArr);


let obj = {name:"Shubham", age: 26, profession:"Front End Devloper"}
let newObj = {...obj, name:"Shubham Satnurkar", city:"Nagpur"}
console.log(newObj);
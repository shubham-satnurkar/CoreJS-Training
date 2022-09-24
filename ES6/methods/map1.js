let arr = [1,2,3,4,5,6,7,8,9];
let newArr= arr.map((val,ind) => {
	return {key:ind, value:val}
})
// console.log(JSON.stringify(newArr));
console.log(newArr);

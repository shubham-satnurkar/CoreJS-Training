function add(x,y,z,...args){
	let sum=0;
	args.forEach(val=> sum+=val);
	return sum;
}
console.log(add(2,5,3));
console.log(add(2,5,3,4));
console.log(add(2,5,3,4,5));
console.log(add(2,5,3,4,5,6));
console.log(add(2,5,3,4,5,6,7));
console.log(add(2,5,3,4,5,6,7,8,9,10));

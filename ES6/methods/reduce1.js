let sal= [12345, 23456, 34567, 45678];
let totSal = sal.reduce((total, val)=>{
	console.log(total+ " "+val)
	return total+val
},0)
console.log(totSal);
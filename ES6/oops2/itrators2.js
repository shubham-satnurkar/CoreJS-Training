class Neosoft 
{
	constructor(start =0, end = Infinity, interval =1){
		this.start=start;
		this.end=end;
		this.interval=interval;
	}
	[Symbol.iterator](){
		let counter = 0;
		let nextIndex =this.start;
		return{
			next:()=>{
				if(nextIndex<=this.end)
				{
					let result={value:nextIndex, done:false}
					nextIndex+=this.interval;
					counter++;
					return result;
				}
				return {value:counter, done:true}
			}
		}
	}
}
let number = new Neosoft(2, 30, 3);
for(let num of number){
	console.log(num); // 2 5 8 11 14 17 20 23 26 29
}
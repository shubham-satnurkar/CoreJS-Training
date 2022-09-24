class Car{
	constructor(){
		this.speed = 100;
	}
	acc(){
		this.speed+= 150;
	}
	checkSpeed(){
		console.log(`The Speed is ${this.speed}`)
	}
}
let obj = new Car;
obj.checkSpeed();
obj.acc();
obj.checkSpeed();
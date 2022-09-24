class Person{
	constructor(name){
		this._name = name
	}
	get name(){
		return this._name
	}
	set name(newName){
		return this._name=newName
	}
	static abc(){
		console.log("Hello world")
	}
}
let obj = new Person("Shubham Satnurkar");
console.log(obj.name);
obj.name="Suraj Meshram";
console.log(obj.name);
obj.newName="Nishanr Jadhav";
console.log(obj.newName);
Person.abc();
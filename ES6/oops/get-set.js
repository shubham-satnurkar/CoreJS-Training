class Person {
	constructor(name){
		this._name=name;
	}
	get name(){
		return this._name;
	}
	set name(newName){
		return this._name = newName;
	}
}
let obj = new Person("Shubham");
console.log(obj.name);
obj.name ="Suraj";
console.log(obj.name);
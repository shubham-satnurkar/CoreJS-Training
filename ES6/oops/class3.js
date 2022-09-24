class Person{
	constructor(name){
		this.setName(name);
	
	}
	getName(){
	
		return this.name
		console.log(name)
	}
	setName(newName)
	{
		return this.name=newName;
		console.log(newName)
	}
}
let obj = new Person("Shubham");
console.log(obj.getName());
obj.setName("Suraj");
console.log(obj.getName());
class Person{
	constructor(name){
		this.name=name;
	}
	getName(){
		return this.name;
	}
}
let obj = new Person("Shubham Satnurkar");
console.log(obj.getName());



class Employee{
	constructor(dept){
		this.dept = dept;
	}
	getInfo(){
		return this.dept
	}
}
let newObj = new Employee("Account");
console.log(newObj.getInfo());
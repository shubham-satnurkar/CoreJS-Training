class Person 
{
	constructor(fname, lname){
		this.fname= fname;
		this.lname= lname;
	}
	getFullName(){
		return `${this.fname} ${this.lname}`
	}
}
class Employee extends Person
{
	constructor(fname, lname){
		super(fname, lname)
	}
}
let obj =  new Employee('Shubham', 'Satnurkar');
console.log(obj.getFullName());

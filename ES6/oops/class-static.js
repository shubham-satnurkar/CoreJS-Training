class Employee{
	constructor(){
		this.name ="Shubham";
	}
	static count=1;
	abc(){
		console.log(Employee.counter());
	}
	static counter(){
		return Employee.count;
	}
}
let obj = new Employee;

obj.abc();
console.log(obj.abc())
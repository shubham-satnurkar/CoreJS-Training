class A //parent
{
	abc(){
		return "Shubham"
	}
}
class B extends A //child
{
	bca(){
		let pname = super.abc();
		let cname = "Nishant"
		console.log(`${pname} and ${cname} are best friends`);
	}
}
let obj = new B;
obj.bca();

class C extends B //B's Child
{
	cba(){
		let gpname=super.abc();
		let pname=super.bca();
		let cname = "Pranay";
		console.log(` ${gpname}, ${pname} and ${cname} are good freinds`);
	}
}

let obc  = new C;
let bac = new B
obc.cba();
obc.bca();



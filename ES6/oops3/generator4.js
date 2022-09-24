function *idGenerate(){
	let id = 0;
	while(true){
		yield id++
	}
}
const ids = idGenerate();
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
console.log(ids.next());
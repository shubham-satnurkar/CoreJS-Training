function fruitIterator(value){
	let nextIndex = 0;
	return{
		next:()=>{
			if(nextIndex< value.length){
				return{
					value:value[nextIndex++],
					done:false
				}
			}
			else{
				return{
					done:true
				}
			}
		}
	}
}
const arr = ["Apple", "Banana", "Mango", "Watermelon"];
console.log(arr);
const fruit = fruitIterator(arr);
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());
console.log(fruit.next());		
console.log(fruit.next());	


function carIterators(value){
	let nextCount = 0;
	return{
		next:function(){
			if(nextCount< value.length){
				return{
					value:value[nextCount++],
					done :false
				}
			}
			else{
				return{
					done: true
				}
			}
		}
	}
}
let array = ["Maruti", "Fiat", "Wolswagon", "Ferari"];
console.log(array);
let car = carIterators(array);
console.log(car.next())
console.log(car.next())
console.log(car.next())
console.log(car.next())
console.log(car.next())

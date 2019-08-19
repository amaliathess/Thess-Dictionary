class Car{
	constructor(){
		this.whels = 4;
		this.type= 'a type '
	}
}
class Ford extends Car{
	constructor(){
		super() // if this is not here you have an empty constractor
		this.windows = 4;

	}

}

const car = new Car();
const ford = new Ford();
console.log(ford.whels);
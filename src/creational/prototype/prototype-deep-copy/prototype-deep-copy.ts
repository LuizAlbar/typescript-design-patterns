export interface Prototype {
	clone(): Prototype;
}

export class Address implements Prototype {
	public street: string;
	public number: number;
	constructor(street: string, number: number) {
		this.street = street;
		this.number = number;
	}
	clone(): Address {
		return new Address(this.street, this.number);
	}
}

class Person implements Prototype {
	public addresses: Address[] = [];
	public name: string;
	public age: number;
	constructor(name: string, age: number) {
		this.name = name;
		this.age = age;
	}

	clone(): Person {
		const newObj = new Person(this.name, this.age);
		newObj.addresses = this.addresses.map((item) => item.clone());
		return newObj;
	}

	addAddress(address: Address) {
		this.addresses.push(address);
	}
}

const adddress1 = new Address("Av. Brasil", 47);
const person1 = new Person("Luiz", 20);
person1.addAddress(adddress1);
const person2 = person1.clone();

person1.addresses[0].street = "Rocinha";

person2.name = "Person2";
console.log(person1);
console.log(person1.addresses); 

console.log("");

console.log(person2);
console.log(person2.addresses);

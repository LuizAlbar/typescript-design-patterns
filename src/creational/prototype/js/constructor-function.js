function Person(firstName, lastName, age) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
}

const personPrototype = {
	firstName: "Luiz",
	lastName: "Gustavo",
	age: 20,

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

const person1 = new Person("Luiz", "Gustavo", 20);
console.log(person1);
console.log(person1.fullName());

function SubPerson(firstName, lastName, age) {
	Person.call(this, firstName, lastName, age);
	this.fromSubClass = "Hello";
}

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person2 = new SubPerson("Caio", "Luccas", 23);
console.log(person2);
console.log(person2.fullName());

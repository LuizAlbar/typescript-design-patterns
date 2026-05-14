const personPrototype = {
	firstName: "Luiz",
	lastName: "Gustavo",
	age: 20,

	fullName() {
		return `${this.firstName} ${this.lastName}`;
	},
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstName = "Carlos";

console.log(anotherPerson);
console.log(anotherPerson.firstName);
console.log(anotherPerson.fullName());

import { CarFactory } from "./factories/car-factory.ts";
import { randomCarAlgorithm } from "./main/random-vehicle-algorithm.ts";
import { randomNumbers } from "./utils/random-numbers.ts";

const carFactory = new CarFactory();
const customersName = ["Ana", "Joana", "Helena", "João"];

for (let i = 0; i < 10; i++) {
	const vehicle = randomCarAlgorithm();

	const name = customersName[randomNumbers(customersName.length)];

	vehicle.pickup(name);
	vehicle.stop();

	const newCar = carFactory.pickUp(name, `NEW CAR ${randomNumbers(100)}`);
	newCar.stop();
	console.log("---");
}

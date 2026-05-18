import { BycicleFactory } from "../factories/bycicle-factory.ts";
import { CarFactory } from "../factories/car-factory.ts";
import { randomNumbers } from "../utils/random-numbers.ts";
import type { Vehicle } from "../vehicle/vehicle.ts";

export function randomCarAlgorithm(): Vehicle {
	const carFactory = new CarFactory();
	const bycicleFactory = new BycicleFactory();

	const car1 = carFactory.getVehicle("fusca");
	const car2 = carFactory.getVehicle("celta");
	const bycicle = bycicleFactory.getVehicle("bycicle");
	const cars = [car1, car2, bycicle];
	return cars[randomNumbers(cars.length)];
}

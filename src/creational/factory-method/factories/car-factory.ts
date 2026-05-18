import { Car } from "../vehicle/car.ts";
import type { Vehicle } from "../vehicle/vehicle.ts";
import { VehicleFactory } from "./vehicle-factory.ts";

export class CarFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Car(vehicleName);
	}
}

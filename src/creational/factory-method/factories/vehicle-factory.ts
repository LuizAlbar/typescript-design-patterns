import type { Vehicle } from "../vehicle/vehicle.ts";

export abstract class VehicleFactory {
	abstract getVehicle(vehicleName: string): Vehicle;

	pickUp(customerName: string, vehicleName: string): Vehicle {
		const car = this.getVehicle(vehicleName);
		car.pickup(customerName);
		return car;
	}
}

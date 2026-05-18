import { Bycicle } from "../vehicle/bycicle.ts";
import type { Vehicle } from "../vehicle/vehicle.ts";
import { VehicleFactory } from "./vehicle-factory.ts";

export class BycicleFactory extends VehicleFactory {
	getVehicle(vehicleName: string): Vehicle {
		return new Bycicle(vehicleName);
	}
}

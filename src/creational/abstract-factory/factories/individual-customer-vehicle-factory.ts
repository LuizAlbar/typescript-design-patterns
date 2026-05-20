import type { Customer } from "../customer/customer.ts";
import { IndividualCustomer } from "../customer/individual-customer.ts";
import { IndividualCar } from "../vehicle/individual-car.ts";
import type { Vehicle } from "../vehicle/vehicle.ts";
import type { CreateVehicleCustomerFactory } from "./customer-vehicle-factory.ts";

export class IndividualCreateVehicleCustomerFactory
	implements CreateVehicleCustomerFactory
{
	createCustomer(customerName: string): Customer {
		return new IndividualCustomer(customerName);
	}
	createVehicle(vehicleName: string, customerName: string): Vehicle {
		const customer = this.createCustomer(customerName);
		return new IndividualCar(vehicleName, customer);
	}
}

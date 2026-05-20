import type { Customer } from "../customer/customer.ts";
import { EnterpriseCustomer } from "../customer/enterprise-customer.ts";
import { EnterpriseCar } from "../vehicle/enterprise-car.ts";
import type { Vehicle } from "../vehicle/vehicle.ts";
import type { CreateVehicleCustomerFactory } from "./customer-vehicle-factory.ts";

export class EnterpriseCreateVehicleCustomerFactory
	implements CreateVehicleCustomerFactory
{
	createCustomer(customerName: string): Customer {
		return new EnterpriseCustomer(customerName);
	}
	createVehicle(vehicleName: string, customerName: string): Vehicle {
		const customer = this.createCustomer(customerName);
		return new EnterpriseCar(vehicleName, customer);
	}
}

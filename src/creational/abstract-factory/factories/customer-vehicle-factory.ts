import type { Customer } from "../customer/customer.ts";
import type { Vehicle } from "../vehicle/vehicle.ts";

export interface CreateVehicleCustomerFactory {
	createCustomer(customerName: string): Customer;
	createVehicle(vehicleName: string, customerName: string): Vehicle;
}

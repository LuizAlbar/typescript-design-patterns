import type { Customer } from "../customer/customer.ts";
import type { Vehicle } from "./vehicle.ts";

export class IndividualCar implements Vehicle {
	public name: string;
	private readonly customer: Customer;
	constructor(name: string, customer: Customer) {
		this.name = name;
		this.customer = customer;
	}
	pickup(): void {
		console.log(
			`${this.name} is picking up ${this.customer.name}`,
		);
	}
}

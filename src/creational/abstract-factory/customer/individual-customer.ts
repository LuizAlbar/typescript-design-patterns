import type { Customer } from "./customer.ts";

export class IndividualCustomer implements Customer {
	public name: string;
	constructor(name: string) {
		this.name = name += "(INDIVIDUAL)";
	}
}

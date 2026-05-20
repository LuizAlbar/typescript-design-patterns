import type { Customer } from "./customer.ts";

export class EnterpriseCustomer implements Customer {
	public name: string;
	constructor(name: string) {
		this.name = name += "(ENTERPRISE)";
	}
}

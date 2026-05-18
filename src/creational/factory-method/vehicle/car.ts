import type { Vehicle } from "./vehicle.ts";

export class Car implements Vehicle {
	private name: string;

	constructor(name: string) {
		this.name = name;
	}
	pickup(customerName: string): void {
		console.log(`${this.name} - picking up ${customerName}`);
	}
	stop(): void {
		console.log(`${this.name} - stopping`);
	}
}

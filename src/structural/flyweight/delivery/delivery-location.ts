import type { DeliveryFlyweight } from "./delivery-flyweight.ts";
import type { DeliveryLocationData } from "./delivery-types.ts";

export class DeliveryLocation implements DeliveryFlyweight {
	private readonly intrinsicState: DeliveryLocationData;

	constructor(instrinsicState: DeliveryLocationData) {
		this.intrinsicState = instrinsicState;
	}

	deliver(name: string, number: string): void {
		console.log(`Delivery to ${name}`);
		console.log(
			`At ${this.intrinsicState.street}, ${this.intrinsicState.city}`,
		);
		console.log(`Number: ${number}`);
	}
}

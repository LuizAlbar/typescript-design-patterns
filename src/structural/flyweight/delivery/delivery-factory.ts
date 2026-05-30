import type { DeliveryFlyweight } from "./delivery-flyweight.ts";
import { DeliveryLocation } from "./delivery-location.ts";
import type {
	DeliveryLocationData,
	DeliveryLocationDictionary,
} from "./delivery-types.ts";

export class DeliveryFactory {
	private locations: DeliveryLocationDictionary = {};

	private createdId(data: DeliveryLocationData): string {
		return Object.values(data)
			.map((item) => item.replace(/\s+/, "").toLowerCase())
			.join("_");
	}

	makeLocation(instrinsicState: DeliveryLocationData): DeliveryFlyweight {
		const key = this.createdId(instrinsicState);

		if (key in this.locations) return this.locations[key];

		this.locations[key] = new DeliveryLocation(instrinsicState);
		return this.locations[key];
	}

	getLocations(): DeliveryLocationDictionary {
		return this.locations;
	}
}

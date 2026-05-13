import type { MealCompositeProtocol } from "../interfaces/meal-composite-protocol.ts";

export abstract class AbstractMeal implements MealCompositeProtocol {
	private name: string;
	private price: number;
	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
	}
	getPrice(): number {
		return this.price;
	}

	getName(): string {
		return this.name;
	}
}

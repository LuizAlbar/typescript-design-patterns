import type { MealCompositeProtocol } from "../interfaces/meal-composite-protocol.ts";

export class MealBox implements MealCompositeProtocol {
	private readonly _childen: MealCompositeProtocol[] = [];

	getPrice(): number {
		return this._childen.reduce((sum, meal) => sum + meal.getPrice(), 0);
	}

	add(...meal: MealCompositeProtocol[]): void {
		meal.forEach((item) => this._childen.push(item));
	}
}

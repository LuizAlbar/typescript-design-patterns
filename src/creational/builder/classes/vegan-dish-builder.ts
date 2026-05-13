import type { MealBuilderProtocol } from "../interfaces/meal-builder-protocol.ts";
import { MealBox } from "./meal-box.ts";
import { Bean, Rice } from "./meals.ts";

export class VeganDishBuilder implements MealBuilderProtocol {
	private _meal: MealBox = new MealBox();

	reset(): this {
		this._meal = new MealBox();
		return this;
	}

	makeMeal(): this {
		const rice = new Rice("Rice", 5);
		const bean = new Bean("Bean", 10);
		this._meal.add(rice, bean);
		return this;
	}

	getMeal(): MealBox {
		return this._meal;
	}

	getPrice(): number {
		return this._meal.getPrice();
	}
}

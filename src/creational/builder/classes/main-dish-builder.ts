import type { MealBuilderProtocol } from "../interfaces/meal-builder-protocol.ts";
import { MealBox } from "./meal-box.ts";
import { Bean, Beverage, Dessert, Meat, Rice } from "./meals.ts";

export class MainDishBuilder implements MealBuilderProtocol {
	private _meal: MealBox = new MealBox();

	reset(): this {
		this._meal = new MealBox();
		return this;
	}

	makeMeal(): this {
		const rice = new Rice("Rice", 5);
		const bean = new Bean("Bean", 10);
		const meat = new Meat("Meat", 37);
		this._meal.add(rice, bean, meat);
		return this;
	}
	makeBeverage(): this {
		const beverage = new Beverage("Beverage", 10);
		this._meal.add(beverage);
		return this;
	}
	makeDessert(): this {
		const dessert = new Dessert("Dessert", 20);
		this._meal.add(dessert);
		return this;
	}

	getMeal(): MealBox {
		return this._meal;
	}

	getPrice(): number {
		return this._meal.getPrice();
	}
}

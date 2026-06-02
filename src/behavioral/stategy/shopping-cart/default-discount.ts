import { DiscountStategy } from "./discount-stategy.ts";
import type { EcommerceShoppingCart } from "./ecommerce-shopping-cart.ts";

export class DefaultDiscount extends DiscountStategy {
	protected discount = 0;

	getDiscount(cart: EcommerceShoppingCart): number {
		const total = cart.getTotal();

		if (total >= 0 && total < 200) {
			this.discount = 10;
		} else if (total >= 200 && total < 300) {
			this.discount = 20;
		} else if (total >= 300) {
			this.discount = 30;
		}

		return total - total * (this.discount / 100);
	}
}

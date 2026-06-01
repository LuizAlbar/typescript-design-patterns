import type { EcommerceShoppingCart } from "./ecommerce-shopping-cart.ts";

export class DiscountStategy {
	protected discount = 0;

	getDiscount(cart: EcommerceShoppingCart): number {
		return cart.getTotal();
	}
}

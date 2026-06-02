import { DiscountStategy } from "../index.ts";
import type { EcommerceProductProtocol } from "./ecommerce-product-protocol.ts";

export class EcommerceShoppingCart {
	private products: EcommerceProductProtocol[] = [];

	private _discountStategy: DiscountStategy = new DiscountStategy();

	addProduct(...products: EcommerceProductProtocol[]): void {
		products.forEach((product) => this.products.push(product));
	}

	getProducts(): EcommerceProductProtocol[] {
		return this.products;
	}

	getTotal(): number {
		return this.products.reduce((sum, product) => sum + product.price, 0);
	}

	getTotalWithDiscount(): number {
		return this._discountStategy.getDiscount(this);
	}

	set discount(discount: DiscountStategy) {
		this._discountStategy = discount;
	}
}

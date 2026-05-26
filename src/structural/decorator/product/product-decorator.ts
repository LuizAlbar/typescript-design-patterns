import type { ProductProtocol } from "./product-protocol.ts";

export class ProductDecorator implements ProductProtocol {
	protected product: ProductProtocol;

	constructor(product: ProductProtocol) {
		this.product = product;
	}

	getPrice(): number {
		return this.product.getPrice();
	}
	getName(): string {
		return this.product.getName();
	}
}

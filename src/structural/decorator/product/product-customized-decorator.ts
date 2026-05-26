import { ProductDecorator } from "./product-decorator.ts";

export class ProductCustomizedDecorator extends ProductDecorator {
	getName(): string {
		return `${this.product.getName()} (Customized)`;
	}

	getPrice(): number {
		return this.product.getPrice() + 50;
	}
}

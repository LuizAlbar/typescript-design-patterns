import { ProductDecorator } from "./product-decorator.ts";

export class ProductPrintDecorator extends ProductDecorator {
	getName(): string {
		return `${this.product.getName()} (Printed)`;
	}

	getPrice(): number {
		return this.product.getPrice() + 10;
	}
}

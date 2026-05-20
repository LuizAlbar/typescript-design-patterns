export abstract class ProductComponent {
	abstract getPrice(): number;
	add(product: ProductComponent): void {}
	remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
	public name: string;
	public price: number;
	constructor(name: string, price: number) {
		super();
		this.name = name;
		this.price = price;
	}
	getPrice(): number {
		return this.price;
	}
}

export class ProductComposite extends ProductComponent {
	private childen: ProductComponent[] = [];

	add(...products: ProductComponent[]): void {
		products.forEach((product) => this.childen.push(product));
	}

	remove(product: ProductComponent): void {
		const productIndex = this.childen.indexOf(product);
		if (productIndex !== -1) {
			this.childen.splice(productIndex, 1);
		}
	}

	getPrice(): number {
		return this.childen.reduce((sum, child) => sum + child.getPrice(), 0);
	}
}

// Client

// Products 1
const pen = new ProductLeaf("Pen", 1);
const smartphone = new ProductLeaf("Smartphone", 1000);
const shirt = new ProductLeaf("T-Shirt", 40);

// Product Box 1
const productBox = new ProductComposite();
productBox.add(pen, smartphone, shirt);

console.log(productBox);
console.log(productBox.getPrice());

// Products 2
const tablet = new ProductLeaf("Tablet", 500);
const kindle = new ProductLeaf("Kindle", 150);

// Product Box 2
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);

productBox.add(anotherProductBox);
console.log(productBox);
console.log(productBox.getPrice());

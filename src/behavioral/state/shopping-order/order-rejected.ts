import type { ShoppingOrder } from "./shopping-order.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";

export class OrderRejected implements ShoppingOrderState {
	private name = "OrderRejected";
	private order: ShoppingOrder;

	constructor(order: ShoppingOrder) {
		this.order = order;
	}

	getName(): string {
		return this.name;
	}
	approvePayment(): void {
		console.log("Unable to aprove payment, since it was rejected");
	}
	rejectPayment(): void {
		console.log("The order payment is rejected");
	}
	waitPayment(): void {
		console.log("Unable to set payment as pendent, since it was rejected");
	}
	shipOrder(): void {
		console.log("Unable to ship a order with a rejected payment");
	}
}

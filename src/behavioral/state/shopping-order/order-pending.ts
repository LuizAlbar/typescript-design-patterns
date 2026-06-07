import { OrderApproved } from "./order-approved.ts";
import { OrderRejected } from "./order-rejected.ts";
import type { ShoppingOrder } from "./shopping-order.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";

export class OrderPending implements ShoppingOrderState {
	private name = "OrderPending";
	private order: ShoppingOrder;

	constructor(order: ShoppingOrder) {
		this.order = order;
	}

	getName(): string {
		return this.name;
	}
	approvePayment(): void {
		this.order.setState(new OrderApproved(this.order));
	}
	rejectPayment(): void {
		this.order.setState(new OrderRejected(this.order));
	}
	waitPayment(): void {
		console.log("The order payment is pending");
	}
	shipOrder(): void {
		console.log("Unable to ship order while payment is pending...")
	}
}

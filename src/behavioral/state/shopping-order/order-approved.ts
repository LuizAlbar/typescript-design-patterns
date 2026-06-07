import { OrderPending } from "./order-pending.ts";
import { OrderRejected } from "./order-rejected.ts";
import type { ShoppingOrder } from "./shopping-order.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";

export class OrderApproved implements ShoppingOrderState {
	private name = "OrderApproved";
	private order: ShoppingOrder;

	constructor(order: ShoppingOrder) {
		this.order = order;
	}

	getName(): string {
		return this.name;
	}
	approvePayment(): void {
		console.log("The order payment is approved");
	}
	rejectPayment(): void {
		this.order.setState(new OrderRejected(this.order));
	}
	waitPayment(): void {
		this.order.setState(new OrderPending(this.order));
	}
	shipOrder(): void {
		console.log("Sending to the customer...")
	}
}

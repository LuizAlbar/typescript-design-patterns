import { OrderPending } from "./order-pending.ts";
import type { ShoppingOrderState } from "./shopping-order-state.ts";

export class ShoppingOrder {
	private state: ShoppingOrderState = new OrderPending(this);

	getState(): ShoppingOrderState {
		return this.state;
	}

	setState(state: ShoppingOrderState): void {
		this.state = state;
	}

	getStateName() {
		return this.state.getName();
	}

	approvePayment(): void {
		this.state.approvePayment();
		console.log(`Payment state now is ${this.getStateName()}`);
	}

	rejectPayment(): void {
		this.state.rejectPayment();
		console.log(`Payment state now is ${this.getStateName()}`);
	}

	waitPayment(): void {
		this.state.waitPayment();
		console.log(`Payment state now is ${this.getStateName()}`);
	}

	shipOrder(): void {
		this.state.shipOrder();
	}
}

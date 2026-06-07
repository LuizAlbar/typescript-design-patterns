import { ShoppingOrder } from "./shopping-order/shopping-order.ts";

const order = new ShoppingOrder();

order.approvePayment();
order.waitPayment();
order.rejectPayment();
order.approvePayment();
order.rejectPayment();
order.approvePayment();
order.shipOrder();
order.rejectPayment();

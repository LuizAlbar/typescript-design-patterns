import { DefaultDiscount } from "./shopping-cart/default-discount.ts";
import { EcommerceShoppingCart } from "./shopping-cart/ecommerce-shopping-cart.ts";

const shoppingCart = new EcommerceShoppingCart();
shoppingCart.discount = new DefaultDiscount();
shoppingCart.addProduct({ name: "Produto 1", price: 50 });
shoppingCart.addProduct({ name: "Produto 2", price: 100 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());

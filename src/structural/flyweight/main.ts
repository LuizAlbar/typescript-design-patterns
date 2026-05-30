import { deliveryContext } from "./delivery/delivery-context.ts";
import { DeliveryFactory } from "./delivery/delivery-factory.ts";

const factory = new DeliveryFactory();

deliveryContext(factory, "Luiz", "20A", "Av. Brasil", "SP");
deliveryContext(factory, "João", "20A", "Av. Brasil", "SP");
deliveryContext(factory, "Helena", "502", "Av. Brasil", "SP");

deliveryContext(factory, "Marcos", "17", "Av. Carlos Lacerda", "SP");
deliveryContext(factory, "Gabriel", "56", "Av. Carlos Lacerda", "SP");

console.log("");

console.log(factory.getLocations());

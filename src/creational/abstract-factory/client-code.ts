import { EnterpriseCreateVehicleCustomerFactory } from "./factories/enterprise-customer-vehicle-factory.ts";
import { IndividualCreateVehicleCustomerFactory } from "./factories/individual-customer-vehicle-factory.ts";

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle("Fusca", "John");
const car2 = individualFactory.createVehicle("Celta", "Douglas");

car1.pickup();
car2.pickup();

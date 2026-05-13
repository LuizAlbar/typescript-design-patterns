import { MainDishBuilder } from "./classes/main-dish-builder.ts";
import { VeganDishBuilder } from "./classes/vegan-dish-builder.ts";

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeDessert();
console.log(mainDishBuilder);
console.log(mainDishBuilder.getPrice()); 

mainDishBuilder.reset();

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());

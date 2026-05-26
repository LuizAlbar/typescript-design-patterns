import { ProductCustomizedDecorator } from "./product/product-customized-decorator.ts";
import { ProductPrintDecorator } from "./product/product-print-decorator.ts";
import { TShirt } from "./product/t-shirt.ts";

const tShirt = new TShirt();
const singlePrintedTShirt = new ProductPrintDecorator(tShirt);
const doublePrintedTShirt = new ProductPrintDecorator(singlePrintedTShirt);
const customizedTShirt = new ProductCustomizedDecorator(tShirt);

console.log(tShirt.getPrice(), tShirt.getName());
console.log(singlePrintedTShirt.getPrice(), singlePrintedTShirt.getName());
console.log(doublePrintedTShirt.getPrice(), doublePrintedTShirt.getName());
console.log(customizedTShirt.getPrice(), customizedTShirt.getName());

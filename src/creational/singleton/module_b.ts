// ## ----- Classic ----- ##

import { MyDatabaseClassic } from "./db/my-database-classic.ts";
// import "./module_a.ts";
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from "./module_a.ts";

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: "C Luiz", age: 20 });
myDatabaseClassic.add({ name: "C Eduardo", age: 24 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);

// ## ----- Module ----- ##

import { MyDatabaseModule } from "./db/my-database-module.ts";
import { myDatabaseModule as myDatabaseModuleFromModuleA } from "./module_a.ts";

const myDatabaseModule = MyDatabaseModule;

myDatabaseModule.add({ name: "M Fernando", age: 20 });
myDatabaseModule.add({ name: "M Paulo", age: 24 });
myDatabaseModule.show();

console.log(myDatabaseModule === myDatabaseModuleFromModuleA);

// ## ----- Function ----- ##

import { MyDatabaseFunction } from "./db/my-database-function.ts";
import { MyDatabaseFunction as myDatabaseFunctionFromModuleA } from "./module_a.ts";

const myDatabaseFunction = MyDatabaseFunction;

myDatabaseFunction.add({ name: "F Ellen", age: 20 });
myDatabaseFunction.add({ name: "F Victor", age: 24 });
myDatabaseFunction.show();

console.log(myDatabaseFunction === myDatabaseFunctionFromModuleA);

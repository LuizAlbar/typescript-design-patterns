// ## ----- Classic ----- ##

import { MyDatabaseClassic } from "./db/my-database-classic.ts";

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: "C Pedro", age: 29 });
myDatabaseClassic.add({ name: "C Arthur", age: 18 });

export { myDatabaseClassic };

// ## ----- Module ----- ##

import { MyDatabaseModule } from "./db/my-database-module.ts";

const myDatabaseModule = MyDatabaseModule;

myDatabaseClassic.add({ name: "M Paulo", age: 29 });
myDatabaseClassic.add({ name: "M Márcio", age: 18 });

export { myDatabaseModule };

// ## ----- Function ----- ##

import { MyDatabaseFunction } from "./db/my-database-function.ts";

const myDatabaseFunction = MyDatabaseFunction;

myDatabaseFunction.add({ name: "F Fábio", age: 24 });
myDatabaseFunction.add({ name: "F Natan", age: 15 });

export { MyDatabaseFunction };

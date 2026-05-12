// Inheritance

export class Shape {
}

export class Circle extends Shape {}

// Aggregation/Composition

export class Car {
    private _motor: Motor;

    constructor(motor: Motor) {
        this._motor = motor;
    }

    public get motor() { return this._motor }
}

export class Motor {}

const motor = new Motor();
const _car   = new Car(motor);

// Dependency

export class Printer {
    print(document: Document): void{
        console.log(`Printing ${document}`)
    }
}

export class Document{}

// Realization

export interface RemoteControl {
    play(): void;
    pause(): void;
}

export interface SpeakerControl extends RemoteControl {
    changeRadio(): void;
}

export class Bluray implements RemoteControl{
    play(): void {}
    pause(): void {}
}

export class Speaker implements SpeakerControl {
    play(): void {}
    pause(): void {}
    changeRadio(): void {}
}

// Abstraction

export abstract class Animal {
    protected abstract makeNoise(): string;

    makeSound(): void {
        console.log(this.makeNoise());
    }
}

export class Dog extends Animal {
    protected makeNoise(): string {
        return 'ruf ruf'
    }
}

const dog = new Dog();
dog.makeSound();
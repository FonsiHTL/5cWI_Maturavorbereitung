export class Car {
    private color: string = "";

    constructor(color: string) {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }
}

const c1: Car = new Car("red");

console.log(c1.getColor);
export class Car {
    private color: string = "";
    private static amountOfCars: number = 0;

    constructor(color: string) {
        this.color = color;
        Car.amountOfCars++;
    }

    getColor(): string {
        return this.color;
    }

    static getAmountOfCars(): number {
        return Car.amountOfCars;
    }
}

const c1: Car = new Car("red");

console.log(c1.getColor());
console.log(Car.getAmountOfCars());

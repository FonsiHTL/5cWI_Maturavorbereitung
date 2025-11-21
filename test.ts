'this is a  testfile'

interface car {
    brand: string
	model: string
	price: number
    year: number
}

const car1: car = {
    brand: 'Audi',
    model: 'A4',
    price: 30000,
    year: 2020
}

const car2: car = {
    brand: 'BMW',
    model: 'M5',
    price: 50000,
    year: 2022
}


function getTotalPrice(cars: car[]): number {
    let totalPrice = 0
    cars.forEach(car => {
        totalPrice += car.price
    })
    return totalPrice
}

console.log(getTotalPrice([car1, car2]))


function printCars(cars: car[]): void {
    cars.forEach(car => {
        console.log(car.brand, car.model, car.price, car.year)
    })
}

printCars([car1, car2])


function getExpensiveCars(cars: car[], minPrice: number): car[] {
    let expensiveCars: car[] = []
    cars.forEach(car => {
        if (car.price > minPrice) {
            expensiveCars.push(car)
        }

    })
    return expensiveCars
}

console.log(getExpensiveCars([car1, car2], 40000))

//
//Lösung mit Array Funktionen:

function getTotalPrice1(cars: car[]): number {
    return cars.reduce((total, car) => total + car.price, 0)
}

console.log(getTotalPrice1([car1, car2]))

function printCars1(cars: car[]): void {
    cars.map(car => {
        console.log(car.brand, car.model, car.price, car.year)
    })
}
printCars1([car1, car2])

function getExpensiveCars1(cars: car[], minPrice: number): car[] {
    let expensiveCars: car[] = []
    expensiveCars = cars.filter(car => car.price > minPrice)

    return expensiveCars
}
console.log(getExpensiveCars1([car1, car2], 40000))



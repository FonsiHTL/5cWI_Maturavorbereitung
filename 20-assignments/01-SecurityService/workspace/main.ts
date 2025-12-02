import { Door } from "./door.ts"
import { Window } from "./window.ts"
import { Car } from "./car.ts"
import { House } from "./house.ts"
import { SecurityService } from "./securityService.ts"

const service = new SecurityService()

const car = new Car([
    new Door(true),
    new Door(true),
    new Door(true),
    new Door(false)
])

const house = new House(
    [new Door(true), new Door(true)],
    [new Window(true), new Window(false)]
)

console.log("Car:", service.checkSecurity(car))
console.log("House:", service.checkSecurity(house))
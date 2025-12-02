import { Door } from "./door.ts"
import { Securable } from "./securable.ts"

export class Car implements Securable {
    doors: Door[]

    constructor(doors: Door[]) {
        this.doors = doors
    }

    areAllDoorsLocked(): boolean {
        return this.doors.every(d => d.isLocked())
    }

    isSecured(): boolean {
        return this.areAllDoorsLocked()
    }
}
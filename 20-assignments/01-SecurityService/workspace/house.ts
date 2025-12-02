import { Door } from "./door.ts"
import { Window } from "./window.ts"
import { Securable } from "./securable.ts"

export class House implements Securable {
    doors: Door[]
    windows: Window[]

    constructor(doors: Door[], windows: Window[]) {
        this.doors = doors
        this.windows = windows
    }

    isFullySecured(): boolean {
        const doorsSecured = this.doors.every(d => d.isLocked())
        const windowsSecured = this.windows.every(w => w.isLocked())
        return doorsSecured && windowsSecured
    }

    isSecured(): boolean {
        return this.isFullySecured()
    }
}
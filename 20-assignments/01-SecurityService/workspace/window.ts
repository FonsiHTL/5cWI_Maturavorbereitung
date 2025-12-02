import { Lockable } from "./lockable.ts"

export class Window implements Lockable {
    private locked: boolean

    constructor(locked: boolean = false) {
        this.locked = locked
    }

    lock(): void {
        this.locked = true
    }

    unlock(): void {
        this.locked = false
    }

    isLocked(): boolean {
        return this.locked
    }
}
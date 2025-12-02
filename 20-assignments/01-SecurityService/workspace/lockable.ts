export interface Lockable {
    lock(): void
    unlock(): void
    isLocked(): boolean
}
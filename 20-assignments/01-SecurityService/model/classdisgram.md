@startuml SecurityService System
left to right direction



interface Securable {
    +checkSecurity(): string
}

interface Lockable {
    +lock()
    +unlock()
    +isLocked(): boolean
}

class Car implements Securable {
    -doors: Door[4]
    +start()
    +stop()
    +checkSecurity(): string
}

class House implements Securable {
    -doors: Door[*]
    -windows: Window[*]
    +checkSecurity(): string
}

class Door implements Lockable {
    -locked: boolean
    +lock()
    +unlock()
    +isLocked(): boolean
}

class Window implements Lockable {
    -locked: boolean
    +lock()
    +unlock()
    +isLocked(): boolean
}

class SecurityService {
    +checkSecurity(object: Securable): string
}

Car "4" -- "1..*" Door : has >
House "1" -- "1..*" Door : has >
House "1" -- "1..*" Window : has >


@enduml
# Assignment: Security Service System

## Objective

Design a UML class diagram and implement it in TypeScript for a security service that monitors and controls lockable objects (cars and houses).

## Problem Description

A **Security Service** is responsible for monitoring the security status of different types of objects:

- **Cars**: Have doors that can be locked or unlocked
- **Houses**: Have both doors and windows that can be locked or unlocked

The security service must be able to:
- Check if all doors of a car are locked
- Check if all doors and windows of a house are locked
- Report the security status of any monitored object

## Requirements

### Part 1: UML Class Diagram (PlantUML)

Design a class diagram that includes:

1. **Interface(s)** to define common behavior for lockable objects
2. **Classes** for:
   - Car (with doors)
   - House (with doors and windows)
   - Door (can be locked/unlocked)
   - Window (can be locked/unlocked)
   - SecurityService (checks security status)

3. **Relationships** showing:
   - Interface implementations
   - Associations (Car has doors, House has doors and windows)
   - Multiplicities (how many doors/windows each object has)

**Hints:**

- Think about what common behavior cars and houses share (both can be secured)
- Consider creating interfaces like `Securable` or `Lockable`
- Doors and Windows both can be locked - can they share an interface?

**Create your diagram in:** `model/classdiagram.puml`

### Part 2: TypeScript Implementation

Implement your UML design in TypeScript with the following functionality:

1. **Door class**
   - Property: `locked: boolean`
   - Methods: `lock()`, `unlock()`, `isLocked(): boolean`

2. **Window class**
   - Property: `locked: boolean`
   - Methods: `lock()`, `unlock()`, `isLocked(): boolean`

3. **Car class**
   - Property: `doors: Door[]`
   - Method: `areAllDoorsLocked(): boolean`

4. **House class**
   - Properties: `doors: Door[]`, `windows: Window[]`
   - Method: `isFullySecured(): boolean` (checks both doors and windows)

5. **SecurityService class**
   - Method: `checkSecurity(object: Securable): string`
   - Returns a report about the security status

**Create your implementation in:** `workspace/` add 
files as required.

### Part 3: Test Your Implementation

Create test scenarios:

1. Create a car with 4 doors
2. Create a house with 2 doors and 5 windows
3. Lock some but not all doors/windows
4. Use the SecurityService to check the security status
5. Print the results

**Create your tests in:** `workspace/main.ts`

## Expected Output Example

```
=== Security Check Report ===
Car Security: UNSECURED (1 of 4 doors unlocked)
House Security: UNSECURED (2 of 2 doors locked, 3 of 5 windows unlocked)

After locking all...
Car Security: SECURED (All doors locked)
House Security: SECURED (All doors and windows locked)
```

## Evaluation Criteria

- **UML Diagram (40%)**
  - Correct use of interfaces
  - Proper relationships and associations
  - Clear multiplicities
  - Follows UML conventions

- **TypeScript Implementation (40%)**
  - Implements the UML design correctly
  - Clean, readable code
  - Proper use of TypeScript types and interfaces
  - All required functionality works

- **Code Quality (20%)**
  - Meaningful variable/method names
  - Code comments where necessary
  - Test scenarios demonstrate all features

## Submission

Submit the following files:

- `model/diagram.puml` - Your UML class diagram
- `workspace/security-service.ts` - Your TypeScript implementation
- `workspace/main.ts` - Your test scenarios
- `README.md` - (Optional) Any notes about your design decisions

## Bonus Challenges (Optional)

1. Add a `lockAll()` method to Car and House
2. Implement different types of doors (FrontDoor, GarageDoor) with different security levels
3. Add a logging system that records when doors/windows are locked/unlocked
4. Create a `Building` class that can contain multiple houses

Good luck! 🔒

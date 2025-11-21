# Online Bookstore - UML Modeling Assignment

## Complete UML Diagram Suite

This assignment models a simple **Online Bookstore** system where customers can browse books, add them to a shopping cart, and complete purchases.

---

## Scenario Overview

A customer visits an online bookstore, browses books, adds them to their cart, proceeds to checkout, makes a payment, and receives an order confirmation.

---

## System Actors & Components

- **Customer** - The user browsing and purchasing books
- **Web App** - The frontend application
- **Auth Service** - Handles user authentication
- **Catalog Service** - Manages book inventory
- **Cart Service** - Manages shopping carts
- **Order Service** - Processes orders
- **Payment Service** - Handles payments
- **Notification Service** - Sends confirmations

---

## Domain Entities

### Book
```json
{
  "id": "BOOK-001",
  "title": "Clean Code",
  "author": "Robert Martin",
  "price": 29.99,
  "stock": 15
}
```

### Cart
```json
{
  "id": "CART-123",
  "customerId": "CUST-456",
  "items": [
    { "bookId": "BOOK-001", "quantity": 2, "price": 29.99 }
  ],
  "total": 59.98
}
```

### Order
```json
{
  "id": "ORD-789",
  "customerId": "CUST-456",
  "status": "PENDING",
  "items": [...],
  "total": 59.98
}
```

---

## Assignment Tasks

Create the following **7 UML diagrams** for this Online Bookstore system:

### Task 1: Use Case Diagram

**Requirements:**
- Show at least 3 main use cases: `Browse Books`, `Purchase Books`, `Manage Account`
- Include 1 actor: `Customer`
- Demonstrate the `<<include>>` relationship (e.g., Purchase Books includes Login)
- Demonstrate the `<<extend>>` relationship (e.g., Apply Discount Code extends Purchase Books)
- Demonstrate `generalization` relationship (e.g., Pay with Credit Card and Pay with PayPal specialize Select Payment Method)

**What to show:**
- Customer can browse books without logging in
- Customer must login to purchase
- Purchase includes payment processing
- Optionally apply discount code during purchase
- Show specific payment methods as specializations of a general payment use case

---

### Task 2: Class Diagram

**Requirements:**
- Model at least 5 classes: `Customer`, `Book`, `Cart`, `CartItem`, `Order`
- Include 1 enum: `OrderStatus` (PENDING, PAID, SHIPPED, DELIVERED)
- Show `composition` relationship between `Cart` and `CartItem` (strong ownership)
- Show `association` between `Customer` and `Cart`
- Show `dependency` where a service class temporarily uses another (e.g., OrderService uses Logger)
- Show `aggregation` (optional, for shared ownership scenario)
- Show generalization/inheritance** (e.g., `EBook` and `PhysicalBook` inherit from `Book`)
- Include at least 1 interface: `Processor`

**What to show:**
- Customer owns a Cart
- Cart contains CartItems (composition - items cannot exist without cart)
- CartItem references Book
- Customer places Orders
- Order has OrderStatus
- Include dependency relationship showing temporary usage
- Include generalization showing EBook and PhysicalBook as specialized types of Book
- (Optional) Show aggregation for weaker ownership relationship

---

### Task 3: Object Diagram

**Requirements:**
- Show concrete instances of your classes
- Create a realistic scenario with actual values

**What to show:**
- An example customer named "Alice"
- Alice's cart with 2 books
- Actual prices and quantities
- The resulting order

---

### Task 4: Activity Diagram

**Requirements:**
- Model the complete book purchase workflow
- Include at least 1 decision point (e.g., "Is logged in?")
- Include at least 1 parallel activity using fork/join (e.g., prepare shipment and send confirmation)
- Show start and end states

**What to show:**
- Browse books
- Add to cart
- Login check (decision)
- Checkout process
- Payment success/failure paths
- Order confirmation

---

### Task 5: State Diagram

**Requirements:**
- Model the states of an **Order** object
- Show at least 4 states
- Include transitions with events/conditions

**What to show:**
- Order lifecycle: PENDING → PAID → SHIPPED → DELIVERED
- Include a CANCELLED state with appropriate transitions
- Show what events trigger state changes (e.g., "Payment Confirmed", "Shipment Sent")

---

### Task 6: Sequence Diagram

**Requirements:**
- Model the login process with at least 3 participants
- Show synchronous messages between components
- Include at least 1 **alt** fragment (for success/failure scenarios)
- Consider using **opt** fragment for optional behaviors (e.g., remember me functionality)
- Consider using **loop** fragment if processing multiple items (e.g., validating multiple credentials)

**Participants:**
- Customer
- Web App
- Auth Service

**What to show:**
1. Customer enters credentials
2. Web App sends login request to Auth Service
3. Auth Service validates credentials
4. **Alt fragment:**
   - **Success path:** Return authentication token, customer is logged in
   - **Failure path:** Return error message, customer sees error
5. (Optional) Use **opt** or **loop** fragments if your scenario requires them

---

### Task 7: Component Diagram

**Requirements:**
- Show the system architecture with at least 4 components
- Include at least 2 interfaces (provided/required)
- Show dependencies between components

**What to show:**
- Frontend component
- Backend services (Catalog, Cart, Order, Payment)
- Database
- External Payment Provider
- Show interfaces between components (e.g., REST API, Payment API)

---

## Deliverables

Create **7 separate PlantUML diagrams** (one for each task above) in the `workspace` folder.

### File Naming:
- [workspace/01-usecasediagram.md](workspace/01-usecasediagram.md)
- [workspace/02-classdiagram.md](workspace/02-classdiagram.md)
- [workspace/03-objectdiagram.md](workspace/03-objectdiagram.md)
- [workspace/04-activitydiagram.md](workspace/04-activitydiagram.md)
- [workspace/05-statediagram.md](workspace/05-statediagram.md)
- [workspace/06-sequencediagram.md](workspace/06-sequencediagram.md)
- [workspace/07-componentdisgram.md](workspace/07-componentdisgram.md)

---

## Evaluation Criteria

Each diagram will be evaluated on:
1. **Correctness** - Proper UML notation and syntax
2. **Completeness** - All required elements are present
3. **Clarity** - Diagram is easy to understand
4. **Relationships** - Correct use of associations, dependencies, etc.
5. **Realism** - Models a plausible real-world scenario

---

## Tips

- Start simple, then add details
- Refer to the tutorial examples in `/10-tutorials/03-sessions/02-UML/`
- Use PlantUML syntax for all diagrams
- Test your diagrams to ensure they render correctly
- Make sure all diagrams are consistent with each other (same entity names, relationships)

---

## Sample Book Inventory

- **Book 1**: "Clean Code" by Robert Martin - €29.99 (Stock: 15)
- **Book 2**: "Design Patterns" by Gang of Four - €39.99 (Stock: 8)
- **Book 3**: "Refactoring" by Martin Fowler - €34.99 (Stock: 12)

---

**Good luck!**

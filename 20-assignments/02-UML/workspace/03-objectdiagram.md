# Object Diagram - Online Bookstore

## PlantUML Diagram

```plantuml
@startuml

' Alice's Customer Object
object "alice : Customer" as alice {
  id = "CUST-456"
  name = "Alice"
  email = "alice@email.com"
  address = "123 Main St"
}

' Alice's Shopping Cart
object "cart123 : Cart" as cart {
  id = "CART-123"
  customerId = "CUST-456"
  total = 59.98
}

' Cart Items
object "item1 : CartItem" as item1 {
  bookId = "BOOK-001"
  quantity = 2
  price = 29.99
}

object "item2 : CartItem" as item2 {
  bookId = "BOOK-002"
  quantity = 1
  price = 39.99
}

' Books
object "book1 : Book" as book1 {
  id = "BOOK-001"
  title = "Clean Code"
  author = "Robert Martin"
  price = 29.99
  stock = 15
}

object "book2 : Book" as book2 {
  id = "BOOK-002"
  title = "Design Patterns"
  author = "Gang of Four"
  price = 39.99
  stock = 8
}

' Alice's Order
object "order789 : Order" as order {
  id = "ORD-789"
  customerId = "CUST-456"
  status = PAID
  total = 59.98
  orderDate = "2025-12-09"
}

' Relationships
alice --> cart : has
alice --> order : placed

cart *-- item1 : contains
cart *-- item2 : contains

item1 --> book1 : references
item2 --> book2 : references

order --> book1 : includes
order --> book2 : includes

note right of alice
  Alice is shopping for
  programming books
end note

note bottom of cart
  Cart total = 59.98
  (2 × 29.99) + (1 × 39.99) - 10.00
end note

note right of order
  Order created from cart
  after successful payment
end note

@enduml
```

## Diagram Explanation

### Concrete Instances:
- **alice**: A Customer object with actual values
- **cart123**: Alice's shopping cart
- **item1, item2**: Two items in the cart
- **book1, book2**: Two specific books from the catalog
- **order789**: The resulting order after checkout

### Real Scenario:
Alice browses the bookstore, adds "Clean Code" (2 copies) and "Design Patterns" (1 copy) to her cart, then completes the purchase, creating an order with PAID status.

### Key Relationships:
- Alice **has** a Cart
- Cart **contains** CartItems (composition)
- CartItems **reference** Books
- Alice **placed** an Order
- Order **includes** Books

 
 
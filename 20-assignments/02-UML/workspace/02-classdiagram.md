# Class Diagram - Online Bookstore

## PlantUML Diagram

```plantuml
@startuml

' Interface
interface PaymentProcessor {
  +processPayment(amount: double): boolean
}

' Enum
enum OrderStatus {
  PENDING
  PAID
  SHIPPED
  DELIVERED
  CANCELLED
}

' Main Classes
class Customer {
  -id: string
  -name: string
  -email: string
  -address: string
  +login(): boolean
  +browseBooks(): List<Book>
  +placeOrder(): Order
}

class Book {
  -id: string
  -title: string
  -author: string
  -price: double
  -stock: int
  +getDetails(): string
  +updateStock(quantity: int): void
}

class EBook {
  -fileSize: string
  -format: string
  +download(): void
}

class PhysicalBook {
  -weight: double
  -dimensions: string
  +calculateShipping(): double
}

class Cart {
  -id: string
  -customerId: string
  -total: double
  +addItem(book: Book, quantity: int): void
  +removeItem(itemId: string): void
  +calculateTotal(): double
  +clear(): void
}

class CartItem {
  -bookId: string
  -quantity: int
  -price: double
  +updateQuantity(quantity: int): void
  +getSubtotal(): double
}

class Order {
  -id: string
  -customerId: string
  -status: OrderStatus
  -total: double
  -orderDate: Date
  +confirmPayment(): void
  +ship(): void
  +cancel(): void
}

class OrderService {
  +createOrder(cart: Cart): Order
  +processOrder(order: Order): void
  +updateStatus(orderId: string, status: OrderStatus): void
}

class Logger {
  +log(message: string): void
  +error(message: string): void
}

' Relationships

' Association: Customer has a Cart (1 to 1)
Customer "1" -- "1" Cart : has >

' Association: Customer places Orders (1 to many)
Customer "1" -- "0..*" Order : places >

' Composition: Cart contains CartItems (strong ownership)
Cart "1" *-- "0..*" CartItem : contains

' Association: CartItem references Book (many to 1)
CartItem "0..*" -- "1" Book : references >

' Aggregation: Order aggregates Books (shared ownership)
Order "0..*" o-- "1..*" Book : includes

' Generalization: EBook and PhysicalBook inherit from Book
Book <|-- EBook
Book <|-- PhysicalBook

' Association: Order has OrderStatus
Order --> OrderStatus : has

' Dependency: OrderService uses Logger (temporary usage)
OrderService ..> Logger : uses

' Dependency: OrderService uses PaymentProcessor interface
OrderService ..> PaymentProcessor : uses

@enduml
```

## Diagram Explanation

### Classes (5+ required):
1. **Customer** - Represents a user of the bookstore
2. **Book** - Base class for all books
3. **Cart** - Shopping cart for customers
4. **CartItem** - Individual items in the cart
5. **Order** - Placed orders

### Enum:
- **OrderStatus** - Tracks order lifecycle states

### Interface:
- **PaymentProcessor** - Interface for payment processing

### Key Relationships:

1. **Association** (Customer ↔ Cart): Customer has one Cart
2. **Association** (Customer ↔ Order): Customer places multiple Orders
3. **Composition** (Cart ◆→ CartItem): Cart strongly owns CartItems (items can't exist without cart)
4. **Association** (CartItem → Book): CartItem references a Book
5. **Aggregation** (Order ◇→ Book): Order includes Books (weaker ownership)
6. **Generalization** (Book ← EBook/PhysicalBook): Inheritance relationship
7. **Dependency** (OrderService ⇢ Logger): OrderService temporarily uses Logger
8. **Dependency** (OrderService ⇢ PaymentProcessor): OrderService uses PaymentProcessor interface

### Design Notes:

- **Simple and clear**: Only essential attributes and methods
- **All requirements met**: Includes composition, association, aggregation, dependency, generalization, enum, and interface
- **Realistic**: Models a real bookstore scenario with customers, books, carts, and orders
- **Consistent**: Uses the same entity structure as described in the assignment

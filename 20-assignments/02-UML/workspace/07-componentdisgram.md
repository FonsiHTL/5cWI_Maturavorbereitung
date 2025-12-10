# Component Diagram - Online Bookstore

## PlantUML Diagram

```plantuml
@startuml

!define RECTANGLE rectangle

' Frontend Component
package "Frontend" {
  component [Web App] as WebApp
}

' Backend Services
package "Backend Services" {
  component [Catalog Service] as CatalogSvc
  component [Cart Service] as CartSvc
  component [Order Service] as OrderSvc
  component [Payment Service] as PaymentSvc
}

' External Systems
package "External Systems" {
  component [Payment Gateway] as PaymentGateway
}

' Database
database "Bookstore DB" as DB

' Interfaces
interface "REST API" as RestAPI
interface "Book API" as BookAPI
interface "Cart API" as CartAPI
interface "Order API" as OrderAPI
interface "Payment API" as PaymentAPI
interface "External Payment API" as ExtPayAPI

' Frontend to Backend connections
WebApp --> RestAPI
RestAPI - CatalogSvc
RestAPI - CartSvc
RestAPI - OrderSvc
RestAPI - PaymentSvc

' Service interfaces
CatalogSvc -up- BookAPI : provides
CartSvc -up- CartAPI : provides
OrderSvc -up- OrderAPI : provides
PaymentSvc -up- PaymentAPI : provides

' Service dependencies
OrderSvc ..> CartAPI : uses
OrderSvc ..> PaymentAPI : uses
PaymentSvc ..> ExtPayAPI : uses

' External payment interface
PaymentGateway - ExtPayAPI : provides

' Database connections
CatalogSvc --> DB : reads/writes
CartSvc --> DB : reads/writes
OrderSvc --> DB : reads/writes
PaymentSvc --> DB : writes

note right of WebApp
  Customer-facing frontend
  - Browse books
  - Manage cart
  - Checkout & payment
end note

note right of CatalogSvc
  Manages book inventory
  - Search books
  - Get book details
  - Update stock
end note

note bottom of PaymentSvc
  Processes payments via
  external payment gateway
  (e.g., Stripe, PayPal)
end note

note bottom of DB
  Stores:
  - Books & inventory
  - Customer carts
  - Orders & transactions
end note

@enduml
```

## Diagram Explanation

### Components (4+):
1. **Web App** - Frontend application (Customer UI)
2. **Catalog Service** - Manages books and inventory
3. **Cart Service** - Handles shopping carts
4. **Order Service** - Processes orders
5. **Payment Service** - Handles payments
6. **Payment Gateway** - External payment provider
7. **Bookstore DB** - Data storage

### Interfaces (2+):
1. **REST API** - Main API between frontend and backend
2. **Book API** - Interface provided by Catalog Service
3. **Cart API** - Interface provided by Cart Service
4. **Order API** - Interface provided by Order Service
5. **Payment API** - Interface provided by Payment Service
6. **External Payment API** - Interface for external payment processing

### Key Relationships:
- **Provided Interfaces** (solid line with lollipop): Services offer these interfaces
- **Required Interfaces** (dashed arrow): Components depend on these interfaces
- **Dependencies** (dashed arrows): OrderService uses CartAPI and PaymentAPI
- **External Dependency**: PaymentService uses External Payment API

### Architecture Flow:
1. Web App communicates via REST API
2. Backend services provide specific interfaces
3. OrderService coordinates cart and payment services
4. PaymentService integrates with external payment gateway
5. All services persist data to shared database

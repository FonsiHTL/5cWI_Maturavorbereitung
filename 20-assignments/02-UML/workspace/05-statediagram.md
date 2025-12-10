@startuml
[*] --> PENDING
PENDING --> PAID : Payment Confirmed
PAID --> SHIPPED : Shipment Sent
SHIPPED --> DELIVERED : Delivery Confirmed
PENDING --> CANCELLED : Cancel Requested
PAID --> CANCELLED : Refund Issued
CANCELLED --> [*]
DELIVERED --> [*]
@enduml
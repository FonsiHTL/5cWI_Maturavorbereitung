@startuml BookStoreSystem
 
left to right direction
skinparam packageStyle rectangle
 
actor Customer
 
rectangle "Online Book Store" {
  usecase "Browse Books" as UC1
  usecase "Purchase Books" as UC2
  usecase "Manage Account" as UC3
  usecase "Login" as UC4
  usecase "Select Payment Method" as UC5
  usecase "Process Payment" as UC6
  usecase "Apply Discount Code" as UC7
 
  usecase "Pay with Credit Card" as UC8
  usecase "Pay with PayPal" as UC9
}
 
' Customer interactions
Customer --> UC1
Customer --> UC2
Customer --> UC3
 
' Includes
UC2 ..> UC4 : <<include>>
UC2 ..> UC5 : <<include>>
UC2 ..> UC6 : <<include>>
 
' Extend
UC7 ..> UC2 : <<extend>>
 
' Payment method specialization
UC8 --|> UC5
UC9 --|> UC5
 
note right of UC2
  Customer must log in
  before purchasing
end note
 
note right of UC7
  Optional: Apply
  discount code
end note
 
@enduml
 
 
@startuml
title Book Purchase Workflow - Activity Diagram
 
start
 
:Browse Books;
:Add Book to Cart;
 
if ("Is user logged in?") then (yes)
    :Proceed to Checkout;
else (no)
    :Show Login Screen;
    :User Logs In;
endif
 
:Enter Shipping Details;
:Select Payment Method;
:Process Payment;
 
if ("Payment Successful?") then (yes)
 
    fork
        :Prepare Shipment;
    fork again
        :Send Order Confirmation Email;
    end fork
 
    :Order Complete;
    stop
 
else (no)
    :Show Payment Error;
    :Offer Retry or Cancel;
 
    if ("Retry Payment?") then (yes)
        :Select Payment Method;
    else (no)
        stop
    endif
endif
 
@enduml
 
 
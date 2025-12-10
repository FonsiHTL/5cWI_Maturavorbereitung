@startuml
title Login Process

actor Customer
participant "Web App" as WebApp
participant "Authentification Service" as AuthSvc

Customer -> WebApp : Enter username & password

opt Remember Me
    WebApp -> WebApp : Save preference
end opt

WebApp -> AuthSvc : Check credentials
activate AuthSvc

loop Input Validation
    AuthSvc -> AuthSvc : Validate input
end loop

alt Login successful
    AuthSvc --> WebApp : authToken
    deactivate AuthSvc
    WebApp -> Customer : Show dashboard

else Login failed
    AuthSvc --> WebApp : error
    deactivate AuthSvc
    WebApp -> Customer : Show error message
end

@enduml

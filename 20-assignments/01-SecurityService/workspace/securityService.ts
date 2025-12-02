import { Securable } from "./securable.ts"

export class SecurityService {
    checkSecurity(object: Securable): string {
        return object.isSecured() ? "Secured" : "Not secured"
    }
}
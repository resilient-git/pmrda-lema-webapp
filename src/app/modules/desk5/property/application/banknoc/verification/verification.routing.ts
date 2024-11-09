import { Route } from "@angular/router";
import { Desk5VerificationBankNocComponent } from './verification.component';
import { VerificationBankNocResolver } from './verification.resolvers';


export const Desk5VerificationBankNocRoutes: Route[] = [
    {
        path     : '',
        component: Desk5VerificationBankNocComponent,
        resolve  : {
            data: VerificationBankNocResolver
        }
    }
];
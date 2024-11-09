import { Route } from "@angular/router";
import { FinancialControllerVerificationBankNocComponent } from './verification.component';
import { VerificationBankNocResolver } from './verification.resolvers';


export const FinancialControllerVerificationBankNocRoutes: Route[] = [
    {
        path     : '',
        component: FinancialControllerVerificationBankNocComponent,
        resolve  : {
            data: VerificationBankNocResolver
        }
    }
];
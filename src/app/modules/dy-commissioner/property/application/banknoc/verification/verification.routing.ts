import { Route } from "@angular/router";
import { VerificationBankNocComponent } from 'app/modules/dy-commissioner/property/application/banknoc/verification/verification.component';
import { VerificationBankNocResolver } from 'app/modules/dy-commissioner/property/application/banknoc/verification/verification.resolvers';


export const VerificationBankNocRoutes: Route[] = [
    {
        path     : '',
        component: VerificationBankNocComponent,
        resolve  : {
            data: VerificationBankNocResolver
        }
    }
];
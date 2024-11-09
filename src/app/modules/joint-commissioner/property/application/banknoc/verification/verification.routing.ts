import { Route } from "@angular/router";
import { JointCommissionerVerificationBankNocComponent } from './verification.component';
import { VerificationBankNocResolver } from './verification.resolvers';


export const JointCommissionerVerificationBankNocRoutes: Route[] = [
    {
        path     : '',
        component: JointCommissionerVerificationBankNocComponent,
        resolve  : {
            data: VerificationBankNocResolver
        }
    }
];
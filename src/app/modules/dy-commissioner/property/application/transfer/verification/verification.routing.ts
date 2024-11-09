import { Route } from "@angular/router";
import { VerificationComponent } from 'app/modules/dy-commissioner/property/application/transfer/verification/verification.component';
import { VerificationResolver } from 'app/modules/dy-commissioner/property/application/transfer/verification/verification.resolvers';


export const VerificationRoutes: Route[] = [
    {
        path     : '',
        component: VerificationComponent,
        resolve  : {
            data: VerificationResolver
        }
    }
];
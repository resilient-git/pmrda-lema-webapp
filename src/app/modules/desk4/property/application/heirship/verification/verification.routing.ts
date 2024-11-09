import { Route } from "@angular/router";
import { VerificationComponent } from 'app/modules/desk4/property/application/heirship/verification/verification.component';
import { VerificationResolver } from 'app/modules/desk4/property/application/heirship/verification/verification.resolvers';


export const VerificationRoutes: Route[] = [
    {
        path     : '',
        component: VerificationComponent,
        resolve  : {
            data: VerificationResolver
        }
    }
];
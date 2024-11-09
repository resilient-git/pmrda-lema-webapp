import { Route } from "@angular/router";
import { VerificationCloseComponent } from 'app/modules/desk1/property/application/heirship/verification_close/verification_close.component';
import { VerificationCloseResolver } from 'app/modules/desk1/property/application/heirship/verification_close/verification_close.resolvers';


export const VerificationCloseRoutes: Route[] = [
    {
        path     : '',
        component: VerificationCloseComponent,
        resolve  : {
            data: VerificationCloseResolver
        }
    }
];
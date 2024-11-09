import { Route } from "@angular/router";
import { DeedVerificationComponent } from 'app/modules/desk3/property/application/transfer/deed_verification/deed_verification.component';
import { DeedVerificationResolver } from 'app/modules/desk3/property/application/transfer/deed_verification/deed_verification.resolvers';


export const DeedVerificationRoutes: Route[] = [
    {
        path     : '',
        component: DeedVerificationComponent,
        resolve  : {
            data: DeedVerificationResolver
        }
    }
];
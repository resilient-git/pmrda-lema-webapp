import { Route } from '@angular/router';
import { VerifyMobileComponent } from 'app/modules/citizens/property/application/heirship/verify-mobile/verify-mobile.component';
import { VerifyMobileResolver } from 'app/modules/citizens/property/application/heirship/verify-mobile/verify-mobile.resolvers';


export const VerifyMobileRoutes: Route[] = [
    {
        path     : '',
        component:  VerifyMobileComponent,
        resolve  : {
            data:  VerifyMobileResolver
        }
    }
];

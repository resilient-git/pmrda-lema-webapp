import { Route } from '@angular/router';
import { VerifyMobileComponent } from './verify-mobile.component';
import { VerifyMobileResolver } from './verify-mobile.resolvers';


export const VerifyMobileRoutes: Route[] = [
    {
        path     : '',
        component:  VerifyMobileComponent,
        resolve  : {
            data:  VerifyMobileResolver
        }
    }
];

import { Route } from '@angular/router';
import { ViewPropertyHeirshipVerifyConfirmComponent } from 'app/modules/desk1/property/application/heirship/verification_close/details/verify/verify.component';
import { ViewPropertyHeirshipVerifyResolver } from 'app/modules/desk1/property/application/heirship/verification_close/details/verify/verify.resolvers';

export const ViewPropertyHeirshipVerifyRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipVerifyConfirmComponent,
        resolve  : {
            data: ViewPropertyHeirshipVerifyResolver
        }
    }
];

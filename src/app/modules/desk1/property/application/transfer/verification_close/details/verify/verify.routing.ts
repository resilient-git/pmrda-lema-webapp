import { Route } from '@angular/router';
import { ViewPropertyTransferVerifyConfirmComponent } from 'app/modules/desk1/property/application/transfer/verification_close/details/verify/verify.component';
import { ViewPropertyTransferVerifyResolver } from 'app/modules/desk1/property/application/transfer/verification_close/details/verify/verify.resolvers';

export const ViewPropertyTransferVerifyRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferVerifyConfirmComponent,
        resolve  : {
            data: ViewPropertyTransferVerifyResolver
        }
    }
];

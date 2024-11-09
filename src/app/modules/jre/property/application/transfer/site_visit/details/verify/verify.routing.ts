import { Route } from '@angular/router';
import { ViewPropertyTransferVerifyComponent } from 'app/modules/jre/property/application/transfer/pending/details/verify/verify.component';
import { ViewPropertyTransferVerifyResolver } from 'app/modules/jre/property/application/transfer/pending/details/verify/verify.resolvers';

export const ViewPropertyTransferVerifyRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferVerifyComponent,
        resolve  : {
            data: ViewPropertyTransferVerifyResolver
        }
    }
];

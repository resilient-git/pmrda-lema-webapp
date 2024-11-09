import { Route } from '@angular/router';
import { ViewPropertyTransferActionComponent } from 'app/modules/tahsildar/property/application/transfer/deed_verification/details/action/action.component';
import { ViewPropertyTransferActionResolver } from 'app/modules/tahsildar/property/application/transfer/deed_verification/details/action/action.resolvers';

export const ViewPropertyTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferActionComponent,
        resolve  : {
            data: ViewPropertyTransferActionResolver
        }
    }
];

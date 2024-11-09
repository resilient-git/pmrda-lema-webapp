import { Route } from '@angular/router';
import { ViewPropertyTransferActionComponent } from 'app/modules/dy-commissioner/property/application/transfer/certificate/details/action/action.component';
import { ViewPropertyTransferActionResolver } from 'app/modules/dy-commissioner/property/application/transfer/certificate/details/action/action.resolvers';

export const ViewPropertyTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferActionComponent,
        resolve  : {
            data: ViewPropertyTransferActionResolver
        }
    }
];

import { Route } from '@angular/router';
import { ViewPropertyTransferActionComponent } from 'app/modules/joint-commissioner/property/application/transfer/calculation/details/action/action.component';
import { ViewPropertyTransferActionResolver } from 'app/modules/joint-commissioner/property/application/transfer/calculation/details/action/action.resolvers';

export const ViewPropertyTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferActionComponent,
        resolve  : {
            data: ViewPropertyTransferActionResolver
        }
    }
];

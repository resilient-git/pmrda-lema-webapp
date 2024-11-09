import { Route } from '@angular/router';
import { ViewPropertyTransferActionComponent } from 'app/modules/desk4/property/application/transfer/appointment/details/action/action.component';
import { ViewPropertyTransferActionResolver } from 'app/modules/desk4/property/application/transfer/appointment/details/action/action.resolvers';

export const ViewPropertyTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferActionComponent,
        resolve  : {
            data: ViewPropertyTransferActionResolver
        }
    }
];
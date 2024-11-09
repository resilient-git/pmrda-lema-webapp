import { Route } from '@angular/router';
import { ViewPropertyTransferActionComponent } from './action.component';
import { ViewPropertyTransferActionResolver } from './action.resolvers';

export const ViewPropertyTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferActionComponent,
        resolve  : {
            data: ViewPropertyTransferActionResolver
        }
    }
];

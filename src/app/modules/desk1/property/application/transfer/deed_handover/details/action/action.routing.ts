import { Route } from '@angular/router';
import { ViewPropertyTransferActionComponent } from 'app/modules/desk1/property/application/transfer/deed_handover/details/action/action.component';
import { ViewPropertyTransferActionResolver } from 'app/modules/desk1/property/application/transfer/deed_handover/details/action/action.resolvers';

export const ViewPropertyTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferActionComponent,
        resolve  : {
            data: ViewPropertyTransferActionResolver
        }
    }
];

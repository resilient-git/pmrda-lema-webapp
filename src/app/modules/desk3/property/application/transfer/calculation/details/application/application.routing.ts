import { Route } from '@angular/router';
import { ViewPropertyTransferApplicationComponent } from 'app/modules/desk3/property/application/transfer/calculation/details/application/application.component';
import { ViewPropertyTransferApplicationResolver } from 'app/modules/desk3/property/application/transfer/calculation/details/application/application.resolvers';

export const ViewPropertyTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferApplicationComponent,
        resolve  : {
            data: ViewPropertyTransferApplicationResolver
        }
    }
];
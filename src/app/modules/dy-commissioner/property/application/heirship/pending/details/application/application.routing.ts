import { Route } from '@angular/router';
import { ViewPropertyTransferApplicationComponent } from 'app/modules/dy-commissioner/property/application/transfer/pending/details/application/application.component';
import { ViewPropertyTransferApplicationResolver } from 'app/modules/dy-commissioner/property/application/transfer/pending/details/application/application.resolvers';

export const ViewPropertyTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferApplicationComponent,
        resolve  : {
            data: ViewPropertyTransferApplicationResolver
        }
    }
];
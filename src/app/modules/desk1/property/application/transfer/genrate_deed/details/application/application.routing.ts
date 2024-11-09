import { Route } from '@angular/router';
import { ViewPropertyTransferApplicationComponent } from 'app/modules/desk1/property/application/transfer/genrate_deed/details/application/application.component';
import { ViewPropertyTransferApplicationResolver } from 'app/modules/desk1/property/application/transfer/genrate_deed/details/application/application.resolvers';

export const ViewPropertyTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferApplicationComponent,
        resolve  : {
            data: ViewPropertyTransferApplicationResolver
        }
    }
];

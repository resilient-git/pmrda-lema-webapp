import { Route } from '@angular/router';
import { ViewPropertyTransferApplicationComponent } from 'app/modules/tahsildar/property/application/transfer/certificate/details/application/application.component';
import { ViewPropertyTransferApplicationResolver } from 'app/modules/tahsildar/property/application/transfer/certificate/details/application/application.resolvers';

export const ViewPropertyTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferApplicationComponent,
        resolve  : {
            data: ViewPropertyTransferApplicationResolver
        }
    }
];

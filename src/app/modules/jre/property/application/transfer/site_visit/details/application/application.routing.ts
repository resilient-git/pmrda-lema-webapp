import { Route } from '@angular/router';
import { ViewPropertyTransferApplicationComponent } from './application.component';
import { ViewPropertyTransferApplicationResolver } from './application.resolvers';

export const ViewPropertyTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferApplicationComponent,
        resolve  : {
            data: ViewPropertyTransferApplicationResolver
        }
    }
];

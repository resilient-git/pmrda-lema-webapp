import { Route } from '@angular/router';
import { TransferStatusComponent } from './status.component';
import { TransferStatusResolver } from './status.resolvers';

export const TransferStatusRoutes: Route[] = [
    {
        path     : '',
        component: TransferStatusComponent,
        resolve  : {
            data: TransferStatusResolver
        }
    }
];

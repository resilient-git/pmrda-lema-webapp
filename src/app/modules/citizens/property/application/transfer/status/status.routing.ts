import { Route } from '@angular/router';
import { TransferStatusComponent } from 'app/modules/citizens/property/application/transfer/status/status.component';
import { TransferStatusResolver } from 'app/modules/citizens/property/application/transfer/status/status.resolvers';

export const TransferStatusRoutes: Route[] = [
    {
        path     : '',
        component: TransferStatusComponent,
        resolve  : {
            data: TransferStatusResolver
        }
    }
];

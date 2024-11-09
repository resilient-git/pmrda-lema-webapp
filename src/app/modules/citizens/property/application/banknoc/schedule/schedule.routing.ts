import { Route } from '@angular/router';
import { ScheduleBankNocTransferComponent } from './schedule.component';
import { ScheduleBankNocTransferResolver } from './schedule.resolvers';

export const ScheduleBankNocTransferRoutes: Route[] = [
    {
        path     : '',
        component: ScheduleBankNocTransferComponent,
        resolve  : {
            data: ScheduleBankNocTransferResolver
        }
    }
];

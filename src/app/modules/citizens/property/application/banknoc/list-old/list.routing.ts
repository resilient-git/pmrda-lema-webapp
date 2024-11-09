import { Route } from '@angular/router';
import { ListBankNocTransferComponent } from './list.component';
import { ListBankNocTransferResolver } from './list.resolvers';

export const ListBankNocTransferRoutes: Route[] = [
    {
        path     : '',
        component: ListBankNocTransferComponent,
        resolve  : {
            data: ListBankNocTransferResolver
        }
    }
];

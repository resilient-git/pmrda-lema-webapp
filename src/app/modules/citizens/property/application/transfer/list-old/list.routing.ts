import { Route } from '@angular/router';
import { ListPropertyTransferComponent } from 'app/modules/citizens/property/application/transfer/list-old/list.component';
import { ListPropertyTransferResolver } from 'app/modules/citizens/property/application/transfer/list-old/list.resolvers';

export const ListPropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: ListPropertyTransferComponent,
        resolve  : {
            data: ListPropertyTransferResolver
        }
    }
];

import { Route } from '@angular/router';
import { NewPropertyTransferComponent } from 'app/modules/citizens/property/application/transfer/add-new-old/add-new.component';
import { NewPropertyTransferResolver } from 'app/modules/citizens/property/application/transfer/add-new-old/add-new.resolvers';

export const NewPropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: NewPropertyTransferComponent,
        resolve  : {
            data: NewPropertyTransferResolver
        }
    }
];

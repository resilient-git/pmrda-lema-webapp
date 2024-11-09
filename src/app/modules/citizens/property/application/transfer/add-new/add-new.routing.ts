import { Route } from '@angular/router';
import { NewPropertyTransferDetailsComponent } from 'app/modules/citizens/property/application/transfer/add-new/add-new.component';
import { NewPropertyTransferDetailsResolver } from 'app/modules/citizens/property/application/transfer/add-new/add-new.resolvers';

export const NewPropertyTransferDetailsRoutes: Route[] = [
    {
        path     : '',
        component: NewPropertyTransferDetailsComponent,
        resolve  : {
            data: NewPropertyTransferDetailsResolver
        }
    }
];

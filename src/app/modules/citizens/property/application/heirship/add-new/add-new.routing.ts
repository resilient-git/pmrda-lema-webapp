import { Route } from '@angular/router';
import { NewHeirshipTransferDetailsComponent } from 'app/modules/citizens/property/application/heirship/add-new/add-new.component';
import { NewHeirshipTransferDetailsResolver } from 'app/modules/citizens/property/application/heirship/add-new/add-new.resolvers';

export const NewHeirshipTransferDetailsRoutes: Route[] = [
    {
        path     : '',
        component: NewHeirshipTransferDetailsComponent,
        resolve  : {
            data: NewHeirshipTransferDetailsResolver
        }
    }
];

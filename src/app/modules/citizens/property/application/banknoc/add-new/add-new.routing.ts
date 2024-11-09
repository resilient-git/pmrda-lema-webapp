import { Route } from '@angular/router';
import { NewBankNocTransferDetailsComponent } from './add-new.component';
import { NewBankNocTransferDetailsResolver } from './add-new.resolvers';

export const NewBankNocTransferDetailsRoutes: Route[] = [
    {
        path     : '',
        component: NewBankNocTransferDetailsComponent,
        resolve  : {
            data: NewBankNocTransferDetailsResolver
        }
    }
];

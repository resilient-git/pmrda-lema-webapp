import { Route } from '@angular/router';
import { ViewBankNocTransferActionComponent } from 'app/modules/desk1/property/application/banknoc/pending/details/action/action.component';
import { ViewBankNocTransferActionResolver } from 'app/modules/desk1/property/application/banknoc/pending/details/action/action.resolvers';

export const ViewBankNocTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferActionComponent,
        resolve  : {
            data: ViewBankNocTransferActionResolver
        }
    }
];

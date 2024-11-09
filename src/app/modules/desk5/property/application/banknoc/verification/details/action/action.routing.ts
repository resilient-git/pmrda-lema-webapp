import { Route } from '@angular/router';
import { ViewBankNocTransferActionComponent } from 'app/modules/desk5/property/application/banknoc/verification/details/action/action.component';
import { ViewBankNocTransferActionResolver } from 'app/modules/desk5/property/application/banknoc/verification/details/action/action.resolvers';

export const ViewBankNocTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferActionComponent,
        resolve  : {
            data: ViewBankNocTransferActionResolver
        }
    }
];

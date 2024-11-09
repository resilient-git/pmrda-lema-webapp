import { Route } from '@angular/router';
import { ViewBankNocTransferActionComponent } from 'app/modules/financial-controller/property/application/banknoc/verification/details/action/action.component';
import { ViewBankNocTransferActionResolver } from 'app/modules/financial-controller/property/application/banknoc/verification/details/action/action.resolvers';

export const ViewBankNocTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferActionComponent,
        resolve  : {
            data: ViewBankNocTransferActionResolver
        }
    }
];

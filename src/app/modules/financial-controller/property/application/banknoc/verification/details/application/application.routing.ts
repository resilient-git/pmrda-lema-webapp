import { Route } from '@angular/router';
import { ViewBankNocTransferApplicationComponent } from 'app/modules/financial-controller/property/application/banknoc/verification/details/application/application.component';
import { ViewBankNocTransferApplicationResolver } from 'app/modules/financial-controller/property/application/banknoc/verification/details/application/application.resolvers';

export const ViewBankNocTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferApplicationComponent,
        resolve  : {
            data: ViewBankNocTransferApplicationResolver
        }
    }
];

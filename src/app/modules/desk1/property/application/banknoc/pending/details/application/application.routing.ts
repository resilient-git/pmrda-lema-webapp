import { Route } from '@angular/router';
import { ViewBankNocTransferApplicationComponent } from 'app/modules/desk1/property/application/banknoc/pending/details/application/application.component';
import { ViewBankNocTransferApplicationResolver } from 'app/modules/desk1/property/application/banknoc/pending/details/application/application.resolvers';

export const ViewBankNocTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferApplicationComponent,
        resolve  : {
            data: ViewBankNocTransferApplicationResolver
        }
    }
];

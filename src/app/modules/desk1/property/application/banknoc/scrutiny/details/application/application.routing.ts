import { Route } from '@angular/router';
import { ViewBankNoCApplicationComponent } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/application/application.component';
import { ViewBankNoCApplicationResolver } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/application/application.resolvers';

export const ViewBankNoCApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNoCApplicationComponent,
        resolve  : {
            data: ViewBankNoCApplicationResolver
        }
    }
];

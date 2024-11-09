import { Route } from '@angular/router';
import { ViewBankNoCActionComponent } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/action/action.component';
import { ViewBankNoCActionResolver } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/action/action.resolvers';

export const ViewBankNoCActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNoCActionComponent,
        resolve  : {
            data: ViewBankNoCActionResolver
        }
    }
];

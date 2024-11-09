import { Route } from '@angular/router';
import { ViewBankNocActionComponent } from './action.component';
import { ViewBankNocActionResolver } from './action.resolvers';

export const ViewBankNocActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocActionComponent,
        resolve  : {
            data: ViewBankNocActionResolver
        }
    }
];

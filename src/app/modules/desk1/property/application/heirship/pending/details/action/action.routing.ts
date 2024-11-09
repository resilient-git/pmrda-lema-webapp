import { Route } from '@angular/router';
import { ViewHeirshipTransferActionComponent } from './action.component';
import { ViewHeirshipTransferActionResolver } from './action.resolvers';

export const ViewHeirshipTransferActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewHeirshipTransferActionComponent,
        resolve  : {
            data: ViewHeirshipTransferActionResolver
        }
    }
];

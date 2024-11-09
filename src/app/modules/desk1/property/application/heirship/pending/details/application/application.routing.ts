import { Route } from '@angular/router';
import { ViewHeirshipTransferApplicationComponent } from './application.component';
import { ViewHeirshipTransferApplicationResolver } from './application.resolvers';

export const ViewHeirshipTransferApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewHeirshipTransferApplicationComponent,
        resolve  : {
            data: ViewHeirshipTransferApplicationResolver
        }
    }
];

import { Route } from "@angular/router";
import { PendingBankNocComponent } from 'app/modules/desk1/property/application/banknoc/pending/pending.component';
import { PendingResolver } from 'app/modules/desk1/property/application/banknoc/pending/pending.resolvers';


export const PendingBankNocRoutes: Route[] = [
    {
        path     : '',
        component: PendingBankNocComponent,
        resolve  : {
            data: PendingResolver
        }
    }
];
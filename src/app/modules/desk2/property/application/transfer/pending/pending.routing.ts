import { Route } from "@angular/router";
import { PendingComponent } from 'app/modules/desk2/property/application/transfer/pending/pending.component';
import { PendingResolver } from 'app/modules/desk2/property/application/transfer/pending/pending.resolvers';


export const PendingRoutes: Route[] = [
    {
        path     : '',
        component: PendingComponent,
        resolve  : {
            data: PendingResolver
        }
    }
];
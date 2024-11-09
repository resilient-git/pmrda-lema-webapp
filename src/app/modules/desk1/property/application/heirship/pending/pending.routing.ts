import { Route } from "@angular/router";
import { PendingHeirshipComponent } from 'app/modules/desk1/property/application/heirship/pending/pending.component';
import { PendingResolver } from 'app/modules/desk1/property/application/heirship/pending/pending.resolvers';


export const PendingHeirshipRoutes: Route[] = [
    {
        path     : '',
        component: PendingHeirshipComponent,
        resolve  : {
            data: PendingResolver
        }
    }
];
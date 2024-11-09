import { Route } from "@angular/router";
import { RejectedComponent } from 'app/modules/desk3/property/application/transfer/rejected/rejected.component';
import { RejectedResolver } from 'app/modules/desk3/property/application/transfer/rejected/rejected.resolvers';


export const RejectedRoutes: Route[] = [
    {
        path     : '',
        component: RejectedComponent,
        resolve  : {
            data: RejectedResolver
        }
    }
];
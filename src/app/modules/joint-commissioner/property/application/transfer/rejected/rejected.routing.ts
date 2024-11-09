import { Route } from "@angular/router";
import { RejectedComponent } from 'app/modules/joint-commissioner/property/application/transfer/rejected/rejected.component';
import { RejectedResolver } from 'app/modules/joint-commissioner/property/application/transfer/rejected/rejected.resolvers';


export const RejectedRoutes: Route[] = [
    {
        path     : '',
        component: RejectedComponent,
        resolve  : {
            data: RejectedResolver
        }
    }
];
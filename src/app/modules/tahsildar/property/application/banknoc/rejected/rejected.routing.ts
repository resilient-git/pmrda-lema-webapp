import { Route } from "@angular/router";
import { RejectedComponent } from 'app/modules/tahsildar/property/application/banknoc/transfer/rejected/rejected.component';
import { RejectedResolver } from 'app/modules/tahsildar/property/application/banknoc/transfer/rejected/rejected.resolvers';


export const RejectedRoutes: Route[] = [
    {
        path     : '',
        component: RejectedComponent,
        resolve  : {
            data: RejectedResolver
        }
    }
];
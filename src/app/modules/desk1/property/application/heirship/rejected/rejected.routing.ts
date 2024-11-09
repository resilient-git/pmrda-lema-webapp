import { Route } from "@angular/router";
import { RejectedHeirshipComponent } from 'app/modules/desk1/property/application/heirship/rejected/rejected.component';
import { RejectedResolver } from 'app/modules/desk1/property/application/heirship/rejected/rejected.resolvers';


export const RejectedHeirshipRoutes: Route[] = [
    {
        path     : '',
        component: RejectedHeirshipComponent,
        resolve  : {
            data: RejectedResolver
        }
    }
];
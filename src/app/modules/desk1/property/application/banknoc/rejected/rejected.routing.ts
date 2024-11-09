import { Route } from "@angular/router";
import { RejectedBankNocComponent } from 'app/modules/desk1/property/application/banknoc/rejected/rejected.component';
import { RejectedResolver } from 'app/modules/desk1/property/application/banknoc/rejected/rejected.resolvers';


export const RejectedBankNocRoutes: Route[] = [
    {
        path     : '',
        component: RejectedBankNocComponent,
        resolve  : {
            data: RejectedResolver
        }
    }
];
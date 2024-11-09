import { Route } from "@angular/router";
import { FeesComponent } from 'app/modules/financial-controller/payment/fees/initiate/fees.component';
import { FeesResolver } from 'app/modules/financial-controller/payment/fees/initiate/fees.resolvers';


export const FeesRoutes: Route[] = [
    {
        path     : '',
        component: FeesComponent,
        resolve  : {
            data: FeesResolver
        }
    }
];
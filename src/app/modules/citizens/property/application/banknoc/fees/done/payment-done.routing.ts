import { Route } from "@angular/router";
import { FeesPaymentDoneComponent } from "./payment-done.component";
import { FeesPaymentDoneResolver } from "./payment-done.resolvers";



export const FeesPaymentDoneRoutes: Route[] = [
    {
        path     : '',
        component: FeesPaymentDoneComponent,
        resolve  : {
            data: FeesPaymentDoneResolver
        }
    }
];
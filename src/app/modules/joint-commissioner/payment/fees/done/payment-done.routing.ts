import { Route } from "@angular/router";
import { FeesPaymentDoneComponent } from 'app/modules/joint-commissioner/payment/fees/done/payment-done.component';
import { FeesPaymentDoneResolver } from 'app/modules/joint-commissioner/payment/fees/done/payment-done.resolvers';



export const FeesPaymentDoneRoutes: Route[] = [
    {
        path     : '',
        component: FeesPaymentDoneComponent,
        resolve  : {
            data: FeesPaymentDoneResolver
        }
    }
];
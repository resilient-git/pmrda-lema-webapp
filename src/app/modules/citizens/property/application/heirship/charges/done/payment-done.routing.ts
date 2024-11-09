import { Route } from "@angular/router";
import { ChargesPaymentDoneComponent } from 'app/modules/citizens/property/application/transfer/charges/done/payment-done.component';
import { ChargesPaymentDoneResolver } from 'app/modules/citizens/property/application/transfer/charges/done/payment-done.resolvers';



export const ChargesPaymentDoneRoutes: Route[] = [
    {
        path     : '',
        component: ChargesPaymentDoneComponent,
        resolve  : {
            data: ChargesPaymentDoneResolver
        }
    }
];
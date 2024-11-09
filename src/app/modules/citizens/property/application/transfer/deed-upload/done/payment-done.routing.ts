import { Route } from "@angular/router";
import { DeedPrintingPaymentDoneComponent } from 'app/modules/desk1/property/application/transfer/deed_printingdone/payment-done.component';
import { DeedPrintingPaymentDoneResolver } from 'app/modules/desk1/property/application/transfer/deed_printingdone/payment-done.resolvers';



export const DeedPrintingPaymentDoneRoutes: Route[] = [
    {
        path     : '',
        component: DeedPrintingPaymentDoneComponent,
        resolve  : {
            data: DeedPrintingPaymentDoneResolver
        }
    }
];
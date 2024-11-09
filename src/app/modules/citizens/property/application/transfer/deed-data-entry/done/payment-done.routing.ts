import { Route } from "@angular/router";
import { DeedDataEntryPaymentDoneComponent } from 'app/modules/citizens/property/application/transfer/deed-data-entrydone/payment-done.component';
import { DeedDataEntryPaymentDoneResolver } from 'app/modules/citizens/property/application/transfer/deed-data-entrydone/payment-done.resolvers';



export const DeedDataEntryPaymentDoneRoutes: Route[] = [
    {
        path     : '',
        component: DeedDataEntryPaymentDoneComponent,
        resolve  : {
            data: DeedDataEntryPaymentDoneResolver
        }
    }
];
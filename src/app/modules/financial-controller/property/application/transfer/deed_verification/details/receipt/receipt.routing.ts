import { Route } from '@angular/router';
import { ViewPropertyTransferReceiptComponent } from 'app/modules/financial-controller/property/application/transfer/deed_verification/details/receipt/receipt.component';
import { ViewPropertyTransferReceiptResolver } from 'app/modules/financial-controller/property/application/transfer/deed_verification/details/receipt/receipt.resolvers';

export const ViewPropertyTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferReceiptComponent,
        resolve  : {
            data: ViewPropertyTransferReceiptResolver
        }
    }
];

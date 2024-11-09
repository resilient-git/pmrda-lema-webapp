import { Route } from '@angular/router';
import { ViewPropertyTransferReceiptComponent } from 'app/modules/desk1/property/application/transfer/scrutiny/details/receipt/receipt.component';
import { ViewPropertyTransferReceiptResolver } from 'app/modules/desk1/property/application/transfer/scrutiny/details/receipt/receipt.resolvers';

export const ViewPropertyTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferReceiptComponent,
        resolve  : {
            data: ViewPropertyTransferReceiptResolver
        }
    }
];

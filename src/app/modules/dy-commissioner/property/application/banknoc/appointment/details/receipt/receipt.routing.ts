import { Route } from '@angular/router';
import { ViewPropertyTransferReceiptComponent } from 'app/modules/dy-commissioner/property/application/banknoc/transfer/appointment/details/receipt/receipt.component';
import { ViewPropertyTransferReceiptResolver } from 'app/modules/dy-commissioner/property/application/banknoc/transfer/appointment/details/receipt/receipt.resolvers';

export const ViewPropertyTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferReceiptComponent,
        resolve  : {
            data: ViewPropertyTransferReceiptResolver
        }
    }
];

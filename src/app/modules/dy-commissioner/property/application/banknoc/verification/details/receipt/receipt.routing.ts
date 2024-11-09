import { Route } from '@angular/router';
import { ViewBankNocTransferReceiptComponent } from 'app/modules/dy-commissioner/property/application/banknoc/verification/details/receipt/receipt.component';
import { ViewBankNocTransferReceiptResolver } from 'app/modules/dy-commissioner/property/application/banknoc/verification/details/receipt/receipt.resolvers';

export const ViewBankNocTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferReceiptComponent,
        resolve  : {
            data: ViewBankNocTransferReceiptResolver
        }
    }
];

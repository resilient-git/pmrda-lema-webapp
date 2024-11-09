import { Route } from '@angular/router';
import { ViewBankNocTransferReceiptComponent } from 'app/modules/desk1/property/application/banknoc/pending/details/receipt/receipt.component';
import { ViewBankNocTransferReceiptResolver } from 'app/modules/desk1/property/application/banknoc/pending/details/receipt/receipt.resolvers';

export const ViewBankNocTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferReceiptComponent,
        resolve  : {
            data: ViewBankNocTransferReceiptResolver
        }
    }
];

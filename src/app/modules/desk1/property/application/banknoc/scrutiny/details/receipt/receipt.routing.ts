import { Route } from '@angular/router';
import { ViewBankNoCReceiptComponent } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/receipt/receipt.component';
import { ViewBankNoCReceiptResolver } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/receipt/receipt.resolvers';

export const ViewBankNoCReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNoCReceiptComponent,
        resolve  : {
            data: ViewBankNoCReceiptResolver
        }
    }
];

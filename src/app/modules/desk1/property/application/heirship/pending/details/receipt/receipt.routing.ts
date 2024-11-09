import { Route } from '@angular/router';
import { ViewHeirshipTransferReceiptComponent } from './receipt.component';
import { ViewHeirshipTransferReceiptResolver } from './receipt.resolvers';

export const ViewHeirshipTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewHeirshipTransferReceiptComponent,
        resolve  : {
            data: ViewHeirshipTransferReceiptResolver
        }
    }
];

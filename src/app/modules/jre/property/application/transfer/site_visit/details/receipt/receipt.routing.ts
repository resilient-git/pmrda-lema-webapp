import { Route } from '@angular/router';
import { ViewPropertyTransferReceiptComponent } from './receipt.component';
import { ViewPropertyTransferReceiptResolver } from './receipt.resolvers';

export const ViewPropertyTransferReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferReceiptComponent,
        resolve  : {
            data: ViewPropertyTransferReceiptResolver
        }
    }
];

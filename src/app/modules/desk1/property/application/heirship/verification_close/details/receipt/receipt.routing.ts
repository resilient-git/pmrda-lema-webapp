import { Route } from '@angular/router';
import { ViewPropertyHeirshipReceiptComponent } from 'app/modules/desk1/property/application/heirship/verification_close/details/receipt/receipt.component';
import { ViewPropertyHeirshipReceiptResolver } from 'app/modules/desk1/property/application/heirship/verification_close/details/receipt/receipt.resolvers';

export const ViewPropertyHeirshipReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipReceiptComponent,
        resolve  : {
            data: ViewPropertyHeirshipReceiptResolver
        }
    }
];

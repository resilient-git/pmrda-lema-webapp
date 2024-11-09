import { Route } from '@angular/router';
import { ViewPropertyHeirshipReceiptComponent } from 'app/modules/desk4/property/application/heirship/appointment/details/receipt/receipt.component';
import { ViewPropertyHeirshipReceiptResolver } from 'app/modules/desk4/property/application/heirship/appointment/details/receipt/receipt.resolvers';

export const ViewPropertyHeirshipReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipReceiptComponent,
        resolve  : {
            data: ViewPropertyHeirshipReceiptResolver
        }
    }
];

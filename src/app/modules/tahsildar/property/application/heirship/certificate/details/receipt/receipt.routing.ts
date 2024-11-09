import { Route } from '@angular/router';
import { ViewPropertyHeirshipReceiptComponent } from 'app/modules/tahsildar/property/application/heirship/certificate/details/receipt/receipt.component';
import { ViewPropertyHeirshipReceiptResolver } from 'app/modules/tahsildar/property/application/heirship/certificate/details/receipt/receipt.resolvers';

export const ViewPropertyHeirshipReceiptRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipReceiptComponent,
        resolve  : {
            data: ViewPropertyHeirshipReceiptResolver
        }
    }
];
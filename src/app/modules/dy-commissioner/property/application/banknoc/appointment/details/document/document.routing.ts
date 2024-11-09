import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/dy-commissioner/property/application/banknoc/transfer/appointment/details/document/document.component';
import { ViewPropertyTransferDocumentResolver } from 'app/modules/dy-commissioner/property/application/banknoc/transfer/appointment/details/document/document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];

import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/joint-commissioner/property/application/transfer/calculation/details/document/document.component';
import { ViewPropertyTransferDocumentResolver } from 'app/modules/joint-commissioner/property/application/transfer/calculation/details/document/document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];
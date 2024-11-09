import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/financial-controller/property/application/transfer/pending/details/document/document.component';
import { ViewPropertyTransferDocumentResolver } from 'app/modules/financial-controller/property/application/transfer/pending/details/document/document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];

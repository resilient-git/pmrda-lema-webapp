import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/desk5/property/application/transfer/pending/details/document/document.component';
import { ViewPropertyTransferDocumentResolver } from 'app/modules/desk5/property/application/transfer/pending/details/document/document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];
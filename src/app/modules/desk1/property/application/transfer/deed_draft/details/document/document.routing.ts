import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/desk1/property/application/transfer/deed_draft/details/document/document.component';
import { ViewPropertyTransferDocumentResolver } from 'app/modules/desk1/property/application/transfer/deed_draft/details/document/document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];

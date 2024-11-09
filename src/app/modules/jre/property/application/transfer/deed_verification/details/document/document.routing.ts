import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from 'app/modules/jre/property/application/transfer/deed_verification/details/document/document.component';
import { ViewPropertyTransferDocumentResolver } from 'app/modules/jre/property/application/transfer/deed_verification/details/document/document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];

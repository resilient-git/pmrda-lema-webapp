import { Route } from '@angular/router';
import { ViewPropertyTransferDocumentComponent } from './document.component';
import { ViewPropertyTransferDocumentResolver } from './document.resolvers';

export const ViewPropertyTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyTransferDocumentComponent,
        resolve  : {
            data: ViewPropertyTransferDocumentResolver
        }
    }
];

import { Route } from '@angular/router';
import { ViewHeirshipTransferDocumentComponent } from './document.component';
import { ViewHeirshipTransferDocumentResolver } from './document.resolvers';

export const ViewHeirshipTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewHeirshipTransferDocumentComponent,
        resolve  : {
            data: ViewHeirshipTransferDocumentResolver
        }
    }
];

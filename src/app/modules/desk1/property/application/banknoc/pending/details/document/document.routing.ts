import { Route } from '@angular/router';
import { ViewBankNocTransferDocumentComponent } from 'app/modules/desk1/property/application/banknoc/pending/details/document/document.component';
import { ViewBankNocTransferDocumentResolver } from 'app/modules/desk1/property/application/banknoc/pending/details/document/document.resolvers';

export const ViewBankNocTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferDocumentComponent,
        resolve  : {
            data: ViewBankNocTransferDocumentResolver
        }
    }
];

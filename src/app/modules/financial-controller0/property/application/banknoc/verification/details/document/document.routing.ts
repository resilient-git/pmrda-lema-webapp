import { Route } from '@angular/router';
import { ViewBankNocTransferDocumentComponent } from 'app/modules/financial-controller/property/application/banknoc/verification/details/document/document.component';
import { ViewBankNocTransferDocumentResolver } from 'app/modules/financial-controller/property/application/banknoc/verification/details/document/document.resolvers';

export const ViewBankNocTransferDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNocTransferDocumentComponent,
        resolve  : {
            data: ViewBankNocTransferDocumentResolver
        }
    }
];

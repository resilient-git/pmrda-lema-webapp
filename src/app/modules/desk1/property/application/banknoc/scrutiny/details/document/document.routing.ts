import { Route } from '@angular/router';
import { ViewBankNoCDocumentComponent } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/document/document.component';
import { ViewBankNoCDocumentResolver } from 'app/modules/desk1/property/application/banknoc/scrutiny/details/document/document.resolvers';

export const ViewBankNoCDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewBankNoCDocumentComponent,
        resolve  : {
            data: ViewBankNoCDocumentResolver
        }
    }
];

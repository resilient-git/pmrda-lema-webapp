import { Route } from '@angular/router';
import { ViewPropertyHeirshipDocumentComponent } from 'app/modules/desk1/property/application/heirship/scrutiny/details/document/document.component';
import { ViewPropertyHeirshipDocumentResolver } from 'app/modules/desk1/property/application/heirship/scrutiny/details/document/document.resolvers';

export const ViewPropertyHeirshipDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipDocumentComponent,
        resolve  : {
            data: ViewPropertyHeirshipDocumentResolver
        }
    }
];

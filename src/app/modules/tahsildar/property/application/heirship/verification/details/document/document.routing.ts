import { Route } from '@angular/router';
import { ViewPropertyHeirshipDocumentComponent } from 'app/modules/tahsildar/property/application/heirship/verification/details/document/document.component';
import { ViewPropertyHeirshipDocumentResolver } from 'app/modules/tahsildar/property/application/heirship/verification/details/document/document.resolvers';

export const ViewPropertyHeirshipDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipDocumentComponent,
        resolve  : {
            data: ViewPropertyHeirshipDocumentResolver
        }
    }
];

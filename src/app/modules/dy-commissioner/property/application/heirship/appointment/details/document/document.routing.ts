import { Route } from '@angular/router';
import { ViewPropertyHeirshipDocumentComponent } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/document/document.component';
import { ViewPropertyHeirshipDocumentResolver } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/document/document.resolvers';

export const ViewPropertyHeirshipDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipDocumentComponent,
        resolve  : {
            data: ViewPropertyHeirshipDocumentResolver
        }
    }
];

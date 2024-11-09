import { Route } from '@angular/router';
import { ViewPropertyHeirshipDocumentComponent } from 'app/modules/desk1/property/application/heirship/file_close/details/document/document.component';
import { ViewPropertyHeirshipDocumentResolver } from 'app/modules/desk1/property/application/heirship/file_close/details/document/document.resolvers';

export const ViewPropertyHeirshipDocumentRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipDocumentComponent,
        resolve  : {
            data: ViewPropertyHeirshipDocumentResolver
        }
    }
];

import { Route } from '@angular/router';
import { ViewApplicationComponent } from './view-application.component';
import { ViewApplicationResolver } from './view-application.resolvers';


export const ViewApplicationRoutes: Route[] = [
    {
        path     : '',
        component:  ViewApplicationComponent,
        resolve  : {
            data:  ViewApplicationResolver
        }
    }
];

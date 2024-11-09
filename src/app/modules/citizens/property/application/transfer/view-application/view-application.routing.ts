import { Route } from '@angular/router';
import { ViewApplicationComponent } from 'app/modules/citizens/property/application/transfer/view-application/view-application.component';
import { ViewApplicationResolver } from 'app/modules/citizens/property/application/transfer/view-application/view-application.resolvers';


export const ViewApplicationRoutes: Route[] = [
    {
        path     : '',
        component:  ViewApplicationComponent,
        resolve  : {
            data:  ViewApplicationResolver
        }
    }
];

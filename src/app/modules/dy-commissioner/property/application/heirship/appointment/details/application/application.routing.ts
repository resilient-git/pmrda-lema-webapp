import { Route } from '@angular/router';
import { ViewPropertyHeirshipApplicationComponent } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/application/application.component';
import { ViewPropertyHeirshipApplicationResolver } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/application/application.resolvers';

export const ViewPropertyHeirshipApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipApplicationComponent,
        resolve  : {
            data: ViewPropertyHeirshipApplicationResolver
        }
    }
];

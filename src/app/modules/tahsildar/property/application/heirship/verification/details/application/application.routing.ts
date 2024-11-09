import { Route } from '@angular/router';
import { ViewPropertyHeirshipApplicationComponent } from 'app/modules/tahsildar/property/application/heirship/verification/details/application/application.component';
import { ViewPropertyHeirshipApplicationResolver } from 'app/modules/tahsildar/property/application/heirship/verification/details/application/application.resolvers';

export const ViewPropertyHeirshipApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipApplicationComponent,
        resolve  : {
            data: ViewPropertyHeirshipApplicationResolver
        }
    }
];
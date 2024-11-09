import { Route } from '@angular/router';
import { ViewPropertyHeirshipApplicationComponent } from 'app/modules/joint-commissioner/property/application/heirship/certificate/details/application/application.component';
import { ViewPropertyHeirshipApplicationResolver } from 'app/modules/joint-commissioner/property/application/heirship/certificate/details/application/application.resolvers';

export const ViewPropertyHeirshipApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipApplicationComponent,
        resolve  : {
            data: ViewPropertyHeirshipApplicationResolver
        }
    }
];
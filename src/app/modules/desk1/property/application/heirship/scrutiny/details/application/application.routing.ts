import { Route } from '@angular/router';
import { ViewPropertyHeirshipApplicationComponent } from 'app/modules/desk1/property/application/heirship/scrutiny/details/application/application.component';
import { ViewPropertyHeirshipApplicationResolver } from 'app/modules/desk1/property/application/heirship/scrutiny/details/application/application.resolvers';

export const ViewPropertyHeirshipApplicationRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipApplicationComponent,
        resolve  : {
            data: ViewPropertyHeirshipApplicationResolver
        }
    }
];
import { Route } from '@angular/router';
import { ViewPropertyHeirshipActionComponent } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/action/action.component';
import { ViewPropertyHeirshipActionResolver } from 'app/modules/dy-commissioner/property/application/heirship/appointment/details/action/action.resolvers';

export const ViewPropertyHeirshipActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipActionComponent,
        resolve  : {
            data: ViewPropertyHeirshipActionResolver
        }
    }
];

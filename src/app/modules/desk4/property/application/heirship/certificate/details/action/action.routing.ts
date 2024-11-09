import { Route } from '@angular/router';
import { ViewPropertyHeirshipActionComponent } from 'app/modules/desk4/property/application/heirship/certificate/details/action/action.component';
import { ViewPropertyHeirshipActionResolver } from 'app/modules/desk4/property/application/heirship/certificate/details/action/action.resolvers';

export const ViewPropertyHeirshipActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipActionComponent,
        resolve  : {
            data: ViewPropertyHeirshipActionResolver
        }
    }
];

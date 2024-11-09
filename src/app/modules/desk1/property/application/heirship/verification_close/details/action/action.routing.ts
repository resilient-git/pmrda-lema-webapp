import { Route } from '@angular/router';
import { ViewPropertyHeirshipActionComponent } from 'app/modules/desk1/property/application/heirship/verification_close/details/action/action.component';
import { ViewPropertyHeirshipActionResolver } from 'app/modules/desk1/property/application/heirship/verification_close/details/action/action.resolvers';

export const ViewPropertyHeirshipActionRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyHeirshipActionComponent,
        resolve  : {
            data: ViewPropertyHeirshipActionResolver
        }
    }
];

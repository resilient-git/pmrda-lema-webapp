import { Route } from '@angular/router';
import { ViewComponent } from './view.component';
import { ViewResolver } from './view.resolvers';


export const ViewRoutes: Route[] = [
    {
        path     : '',
        component:  ViewComponent,
        resolve  : {
            data:  ViewResolver
        }
    }
];

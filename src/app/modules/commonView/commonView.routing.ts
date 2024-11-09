import { Route } from '@angular/router';
import { CommonViewComponent } from './commonView.component';
import { commonViewResolver } from './commonView.resolvers';

export const CommonViewRoutes: Route[] = [
    {
        path     : '',
        component: CommonViewComponent,
        resolve  : {
            data: commonViewResolver
        }
    }
];

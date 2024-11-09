import { Route } from '@angular/router';
import { DashboardComponent } from 'app/modules/dy-commissioner/dashboard/dashboard.component';
import { DashboardResolver } from 'app/modules/dy-commissioner/dashboard/dashboard.resolvers';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: DashboardResolver
        }
    }
];

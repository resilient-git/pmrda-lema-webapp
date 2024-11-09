import { Route } from '@angular/router';
import { DashboardComponent } from 'app/modules/joint-commissioner/dashboard/dashboard.component';
import { DashboardResolver } from 'app/modules/joint-commissioner/dashboard/dashboard.resolvers';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: DashboardResolver
        }
    }
];
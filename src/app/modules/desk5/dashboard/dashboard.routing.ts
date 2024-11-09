import { Route } from '@angular/router';
import { DashboardComponent } from 'app/modules/desk5/dashboard/dashboard.component';
import { DashboardResolver } from 'app/modules/desk5/dashboard/dashboard.resolvers';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: DashboardResolver
        }
    }
];

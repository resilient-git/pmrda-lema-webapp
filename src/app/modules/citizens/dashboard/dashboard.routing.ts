import { Route } from '@angular/router';
import { DashboardComponent } from 'app/modules/citizens/dashboard/dashboard.component';
import { DashboardResolver } from 'app/modules/citizens/dashboard/dashboard.resolvers';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: DashboardResolver
        }
    }
];

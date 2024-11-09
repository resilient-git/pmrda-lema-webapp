import { Route } from '@angular/router';
import { DashboardComponent } from 'app/modules/financial-controller/dashboard/dashboard.component';
import { DashboardResolver } from 'app/modules/financial-controller/dashboard/dashboard.resolvers';

export const dashboardRoutes: Route[] = [
    {
        path     : '',
        component: DashboardComponent,
        resolve  : {
            data: DashboardResolver
        }
    }
];

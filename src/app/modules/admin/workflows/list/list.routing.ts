import { Route } from "@angular/router";
import { WorkFlowsListComponent } from 'app/modules/admin/workflows/list/list.component';
import { WorkFlowsListResolver } from 'app/modules/admin/workflows/list/list.resolvers';


export const WorkFlowsListRoutes: Route[] = [
    {
        path     : '',
        component: WorkFlowsListComponent,
        resolve  : {
            data: WorkFlowsListResolver
        }
    }
];
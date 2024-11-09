import { Route } from "@angular/router";
import { ListComponent } from 'app/modules/admin/masters/society-name/list/list.component';
import { ListResolver } from 'app/modules/admin/masters/society-name/list/list.resolvers';


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
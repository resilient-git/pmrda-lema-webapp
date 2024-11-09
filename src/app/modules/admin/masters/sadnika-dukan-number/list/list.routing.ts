import { Route } from "@angular/router";
import { ListComponent } from 'app/modules/admin/masters/sadnika-dukan-number/list/list.component';
import { ListResolver } from 'app/modules/admin/masters/sadnika-dukan-number/list/list.resolvers';


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
import { Route } from "@angular/router";
import { ListComponent } from 'app/modules/admin/transfer-application/appointment/list/list.component';
import { ListResolver } from 'app/modules/admin/transfer-application/appointment/list/list.resolvers';


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
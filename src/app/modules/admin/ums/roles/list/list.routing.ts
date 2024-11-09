import { Route } from "@angular/router";
import { RoleListComponent } from 'app/modules/admin/ums/roles/list/list.component';
import { RoleListResolver } from 'app/modules/admin/ums/roles/list/list.resolvers';


export const RoleListRoutes: Route[] = [
    {
        path     : '',
        component: RoleListComponent,
        resolve  : {
            data: RoleListResolver
        }
    }
];
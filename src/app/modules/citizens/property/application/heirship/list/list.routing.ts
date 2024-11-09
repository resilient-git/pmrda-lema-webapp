import { Route } from "@angular/router";
import { ListComponent } from 'app/modules/citizens/property/application/heirship/list/list.component';
import { ListResolver } from 'app/modules/citizens/property/application/heirship/list/list.resolvers';


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
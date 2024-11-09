import { Route } from "@angular/router";
import { ListComponent } from 'app/modules/citizens/property/application/transfer/deed-data-entry/list/list.component';
import { ListResolver } from 'app/modules/citizens/property/application/transfer/deed-data-entry/list/list.resolvers';


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
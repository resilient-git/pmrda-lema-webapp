import { Route } from "@angular/router";
import { ListComponent } from "./list.component";
import { ListResolver } from "./list.resolvers";


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
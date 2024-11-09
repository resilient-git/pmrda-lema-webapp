import { Route } from "@angular/router";
import { ListComponent } from 'app/modules/desk1/property/application/transfer/deed_printing/list/list.component';
import { ListResolver } from 'app/modules/desk1/property/application/transfer/deed_printing/list/list.resolvers';


export const ListRoutes: Route[] = [
    {
        path     : '',
        component: ListComponent,
        resolve  : {
            data: ListResolver
        }
    }
];
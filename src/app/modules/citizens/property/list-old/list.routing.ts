import { Route } from '@angular/router';
import { ListPropertyComponent } from 'app/modules/citizens/property/list-old/list.component';
import { ListPropertyResolver } from 'app/modules/citizens/property/list-old/list.resolvers';
export const ListPropertyRoutes: Route[] = [
    {
        path     : '',
        component: ListPropertyComponent,
        resolve  : {
            data: ListPropertyResolver
        }
    }
];

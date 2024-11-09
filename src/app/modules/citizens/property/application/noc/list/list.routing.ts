import { Route } from '@angular/router';
import { ListPropertyNocComponent } from 'app/modules/citizens/property/application/noc/list/list.component';
import { ListPropertyNocResolver } from 'app/modules/citizens/property/application/noc/list/list.resolvers';

export const ListPropertyNocRoutes: Route[] = [
    {
        path     : '',
        component: ListPropertyNocComponent,
        resolve  : {
            data: ListPropertyNocResolver
        }
    }
];

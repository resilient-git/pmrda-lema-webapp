import { Route } from '@angular/router';
import { ListPropertyNominationComponent } from 'app/modules/citizens/property/application/nomination/list/list.component';
import { ListPropertyNominationResolver } from 'app/modules/citizens/property/application/nomination/list/list.resolvers';

export const ListPropertyNominationRoutes: Route[] = [
    {
        path     : '',
        component: ListPropertyNominationComponent,
        resolve  : {
            data: ListPropertyNominationResolver
        }
    }
];

import { Route } from '@angular/router';
import { SearchPropertyComponent } from 'app/modules/citizens/property/search/search.component';
import { SearchPropertyResolver } from 'app/modules/citizens/property/search/search.resolvers';

export const SearchPropertyRoutes: Route[] = [
    {
        path     : '',
        component: SearchPropertyComponent,
        resolve  : {
            data: SearchPropertyResolver
        }
    }
];

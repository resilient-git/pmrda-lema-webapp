import { Route } from '@angular/router';
import { NewPropertyNocComponent } from 'app/modules/citizens/property/application/noc/add-new/add-new.component';
import { NewPropertyNocResolver } from 'app/modules/citizens/property/application/noc/add-new/add-new.resolvers';

export const NewPropertyNocRoutes: Route[] = [
    {
        path     : '',
        component: NewPropertyNocComponent,
        resolve  : {
            data: NewPropertyNocResolver
        }
    }
];

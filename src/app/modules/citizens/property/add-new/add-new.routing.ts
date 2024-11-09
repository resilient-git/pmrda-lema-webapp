import { Route } from '@angular/router';
import { NewPropertyComponent } from 'app/modules/citizens/property/add-new/add-new.component';
import { NewPropertyResolver } from 'app/modules/citizens/property/add-new/add-new.resolvers';

export const NewPropertyRoutes: Route[] = [
    {
        path     : '',
        component: NewPropertyComponent,
        resolve  : {
            data: NewPropertyResolver
        }
    }
];

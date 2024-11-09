import { Route } from '@angular/router';
import { NewPropertyNominationComponent } from 'app/modules/citizens/property/application/nomination/add-new/add-new.component';
import { NewPropertyNominationResolver } from 'app/modules/citizens/property/application/nomination/add-new/add-new.resolvers';

export const NewPropertyNominationRoutes: Route[] = [
    {
        path     : '',
        component: NewPropertyNominationComponent,
        resolve  : {
            data: NewPropertyNominationResolver
        }
    }
];

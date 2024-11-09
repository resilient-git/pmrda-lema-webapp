import { Route } from '@angular/router';
import { SelectPropertyComponent } from 'app/modules/citizens/property/application/transfer/select/select.component';
import { SelectPropertyResolver } from 'app/modules/citizens/property/application/transfer/select/select.resolvers';

export const SelectPropertyRoutes: Route[] = [
    {
        path     : '',
        component: SelectPropertyComponent,
        resolve  : {
            data: SelectPropertyResolver
        }
    }
];

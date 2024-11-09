import { Route } from '@angular/router';
import { SelectHeirshipComponent } from 'app/modules/citizens/property/application/heirship/select/select.component';
import { SelectHeirshipResolver } from 'app/modules/citizens/property/application/heirship/select/select.resolvers';

export const SelectHeirshipRoutes: Route[] = [
    {
        path     : '',
        component: SelectHeirshipComponent,
        resolve  : {
            data: SelectHeirshipResolver
        }
    }
];

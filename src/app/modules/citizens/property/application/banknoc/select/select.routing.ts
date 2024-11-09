import { Route } from '@angular/router';
import { SelectBankNocComponent } from './select.component';
import { SelectBankNocResolver } from './select.resolvers';

export const SelectBankNocRoutes: Route[] = [
    {
        path     : '',
        component: SelectBankNocComponent,
        resolve  : {
            data: SelectBankNocResolver
        }
    }
];

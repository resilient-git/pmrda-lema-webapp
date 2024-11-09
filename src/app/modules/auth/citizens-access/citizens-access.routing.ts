import { Route } from '@angular/router';
import { CitizensAccessComponent } from 'app/modules/auth/citizens-access/citizens-access.component';

export const authSignInRoutes: Route[] = [
    {
        path     : '',
        component: CitizensAccessComponent
    }
];

import { Route } from "@angular/router";
import { PasswordComponent } from 'app/modules/joint-commissioner/settings/password/password.component';
import { PasswordResolver } from 'app/modules/joint-commissioner/settings/password/password.resolvers';


export const PasswordRoutes: Route[] = [
    {
        path     : '',
        component: PasswordComponent,
        resolve  : {
            data: PasswordResolver
        }
    }
];
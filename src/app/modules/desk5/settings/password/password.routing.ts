import { Route } from "@angular/router";
import { PasswordComponent } from 'app/modules/desk5/settings/password/password.component';
import { PasswordResolver } from 'app/modules/desk5/settings/password/password.resolvers';


export const PasswordRoutes: Route[] = [
    {
        path     : '',
        component: PasswordComponent,
        resolve  : {
            data: PasswordResolver
        }
    }
];
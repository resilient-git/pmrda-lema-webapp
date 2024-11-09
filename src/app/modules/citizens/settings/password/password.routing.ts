import { Route } from "@angular/router";
import { PasswordComponent } from 'app/modules/citizens/settings/password/password.component';
import { PasswordResolver } from 'app/modules/citizens/settings/password/password.resolvers';


export const PasswordRoutes: Route[] = [
    {
        path     : '',
        component: PasswordComponent,
        resolve  : {
            data: PasswordResolver
        }
    }
];
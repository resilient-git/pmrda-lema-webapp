import { Route } from "@angular/router";
import { ProfileComponent } from 'app/modules/financial-controller/profile/profile.component';
import { ProfileResolver } from 'app/modules/financial-controller/profile/profile.resolvers';


export const ProfileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent,
        resolve  : {
            data: ProfileResolver
        }
    }
];
import { Route } from "@angular/router";
import { ProfileComponent } from 'app/modules/joint-commissioner/profile/profile.component';
import { ProfileResolver } from 'app/modules/joint-commissioner/profile/profile.resolvers';


export const ProfileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent,
        resolve  : {
            data: ProfileResolver
        }
    }
];
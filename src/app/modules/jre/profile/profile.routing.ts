import { Route } from "@angular/router";
import { ProfileComponent } from 'app/modules/jre/profile/profile.component';
import { ProfileResolver } from 'app/modules/jre/profile/profile.resolvers';


export const ProfileRoutes: Route[] = [
    {
        path     : '',
        component: ProfileComponent,
        resolve  : {
            data: ProfileResolver
        }
    }
];
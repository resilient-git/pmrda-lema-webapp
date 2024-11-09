import { Route } from "@angular/router";

import { MobileResolver } from 'app/modules/desk2/settings/mobile/mobile.resolvers';
import { MobileComponent } from "app/modules/desk2/settings/mobile/mobile.component";


export const MobileRoutes: Route[] = [
    {
        path     : '',
        component: MobileComponent,
        resolve  : {
            data: MobileResolver
        }
    }
];
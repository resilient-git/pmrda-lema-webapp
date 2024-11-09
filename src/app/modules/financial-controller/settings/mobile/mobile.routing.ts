import { Route } from "@angular/router";

import { MobileResolver } from 'app/modules/financial-controller/settings/mobile/mobile.resolvers';
import { MobileComponent } from "app/modules/financial-controller/settings/mobile/mobile.component";


export const MobileRoutes: Route[] = [
    {
        path     : '',
        component: MobileComponent,
        resolve  : {
            data: MobileResolver
        }
    }
];
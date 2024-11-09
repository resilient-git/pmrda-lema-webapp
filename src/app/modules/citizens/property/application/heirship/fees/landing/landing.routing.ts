import { Route } from "@angular/router";
import { LandingComponent } from 'app/modules/citizens/property/application/heirship/fees/landing/landing.component';
import { LandingResolver } from 'app/modules/citizens/property/application/heirship/fees/landing/landing.resolvers';


export const LandingRoutes: Route[] = [
    {
        path     : '',
        component: LandingComponent,
        resolve  : {
            data: LandingResolver
        }
    }
];
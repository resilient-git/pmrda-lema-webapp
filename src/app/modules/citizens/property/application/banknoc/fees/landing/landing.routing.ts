import { Route } from "@angular/router";
import { LandingComponent } from "./landing.component";
import { LandingResolver } from "./landing.resolvers";


export const LandingRoutes: Route[] = [
    {
        path     : '',
        component: LandingComponent,
        resolve  : {
            data: LandingResolver
        }
    }
];
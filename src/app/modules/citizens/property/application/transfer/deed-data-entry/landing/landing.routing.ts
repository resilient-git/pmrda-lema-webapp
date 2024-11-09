import { Route } from "@angular/router";
import { LandingComponent } from 'app/modules/citizens/property/application/transfer/deed-data-entrylanding/landing.component';
import { LandingResolver } from 'app/modules/citizens/property/application/transfer/deed-data-entrylanding/landing.resolvers';


export const LandingRoutes: Route[] = [
    {
        path     : '',
        component: LandingComponent,
        resolve  : {
            data: LandingResolver
        }
    }
];
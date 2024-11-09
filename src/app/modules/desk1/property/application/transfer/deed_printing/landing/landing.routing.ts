import { Route } from "@angular/router";
import { LandingComponent } from 'app/modules/desk1/property/application/transfer/deed_printinglanding/landing.component';
import { LandingResolver } from 'app/modules/desk1/property/application/transfer/deed_printinglanding/landing.resolvers';


export const LandingRoutes: Route[] = [
    {
        path     : '',
        component: LandingComponent,
        resolve  : {
            data: LandingResolver
        }
    }
];
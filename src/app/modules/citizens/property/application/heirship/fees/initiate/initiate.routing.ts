import { Route } from "@angular/router";
import { InitiateComponent } from 'app/modules/citizens/property/application/heirship/fees/initiate/initiate.component';
import { InitiateResolver } from 'app/modules/citizens/property/application/heirship/fees/initiate/initiate.resolvers';


export const InitiateRoutes: Route[] = [
    {
        path     : '',
        component: InitiateComponent,
        resolve  : {
            data: InitiateResolver
        }
    }
];
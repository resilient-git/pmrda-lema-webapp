import { Route } from "@angular/router";
import { InitiateComponent } from "./initiate.component";
import { InitiateResolver } from "./initiate.resolvers";


export const InitiateRoutes: Route[] = [
    {
        path     : '',
        component: InitiateComponent,
        resolve  : {
            data: InitiateResolver
        }
    }
];
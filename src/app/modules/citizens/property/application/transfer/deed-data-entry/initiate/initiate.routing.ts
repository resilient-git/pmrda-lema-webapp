import { Route } from "@angular/router";
import { InitiateComponent } from 'app/modules/citizens/property/application/transfer/deed-data-entry/initiate/initiate.component';
import { InitiateResolver } from 'app/modules/citizens/property/application/transfer/deed-data-entry/initiate/initiate.resolvers';


export const InitiateRoutes: Route[] = [
    {
        path     : '',
        component: InitiateComponent,
        resolve  : {
            data: InitiateResolver
        }
    }
];
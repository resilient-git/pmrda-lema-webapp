import { Route } from "@angular/router";
import { InitiateComponent } from 'app/modules/desk1/property/application/transfer/deed_printing/initiate/initiate.component';
import { InitiateResolver } from 'app/modules/desk1/property/application/transfer/deed_printing/initiate/initiate.resolvers';


export const InitiateRoutes: Route[] = [
    {
        path     : '',
        component: InitiateComponent,
        resolve  : {
            data: InitiateResolver
        }
    }
];
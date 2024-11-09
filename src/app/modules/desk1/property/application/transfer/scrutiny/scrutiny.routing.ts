import { Route } from "@angular/router";
import { ScrutinyComponent } from 'app/modules/desk1/property/application/transfer/scrutiny/scrutiny.component';
import { ScrutinyResolver } from 'app/modules/desk1/property/application/transfer/scrutiny/scrutiny.resolvers';


export const ScrutinyRoutes: Route[] = [
    {
        path     : '',
        component: ScrutinyComponent,
        resolve  : {
            data: ScrutinyResolver
        }
    }
];
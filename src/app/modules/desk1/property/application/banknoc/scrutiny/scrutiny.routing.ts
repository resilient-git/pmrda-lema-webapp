import { Route } from "@angular/router";
import { ScrutinyComponent } from 'app/modules/desk1/property/application/banknoc/scrutiny/scrutiny.component';
import { ScrutinyResolver } from 'app/modules/desk1/property/application/banknoc/scrutiny/scrutiny.resolvers';


export const ScrutinyBankNocRoutes: Route[] = [
    {
        path     : '',
        component: ScrutinyComponent,
        resolve  : {
            data: ScrutinyResolver
        }
    }
];
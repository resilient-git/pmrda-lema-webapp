import { Route } from "@angular/router";
import { DeedGenrateComponent } from 'app/modules/desk1/property/application/transfer/genrate_deed/genrate_deed.component';
import { DeedGenrateResolver } from 'app/modules/desk1/property/application/transfer/genrate_deed/genrate_deed.resolvers';


export const DeedGenrateRoutes: Route[] = [
    {
        path     : '',
        component: DeedGenrateComponent,
        resolve  : {
            data: DeedGenrateResolver
        }
    }
];
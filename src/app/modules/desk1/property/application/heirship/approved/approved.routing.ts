import { Route } from "@angular/router";
import { ApprovedHeirshipComponent } from "./approved.component";
import { ApprovedResolver } from "./approved.resolvers";

export const ApprovedHeirshipRoutes: Route[] = [
    {
        path     : '',
        component: ApprovedHeirshipComponent,
        resolve  : {
            data: ApprovedResolver
        }
    }
];
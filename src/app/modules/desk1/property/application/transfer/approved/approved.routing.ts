import { Route } from "@angular/router";
import { ApprovedComponent } from "./approved.component";
import { ApprovedResolver } from "./approved.resolvers";

export const ApprovedRoutes: Route[] = [
    {
        path     : '',
        component: ApprovedComponent,
        resolve  : {
            data: ApprovedResolver
        }
    }
];
import { Route } from "@angular/router";
import { ApprovedBankNocComponent} from "./approved.component";
import { ApprovedResolver } from "./approved.resolvers";

export const ApprovedBankNocRoutes: Route[] = [
    {
        path     : '',
        component: ApprovedBankNocComponent,
        resolve  : {
            data: ApprovedResolver
        }
    }
];
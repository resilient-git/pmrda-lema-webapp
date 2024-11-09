import { Route } from "@angular/router";
import { DeedHandoverComponent } from 'app/modules/desk1/property/application/transfer/deed_handover/deed_handover.component';
import { DeedHandoverResolver } from 'app/modules/desk1/property/application/transfer/deed_handover/deed_handover.resolvers';


export const DeedHandoverRoutes: Route[] = [
    {
        path     : '',
        component: DeedHandoverComponent,
        resolve  : {
            data: DeedHandoverResolver
        }
    }
];
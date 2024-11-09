import { Route } from "@angular/router";
import { DeedDraftComponent } from 'app/modules/desk1/property/application/transfer/deed_draft/deed_draft.component';
import { DeedDraftResolver } from 'app/modules/desk1/property/application/transfer/deed_draft/deed_draft.resolvers';


export const DeedDraftRoutes: Route[] = [
    {
        path     : '',
        component: DeedDraftComponent,
        resolve  : {
            data: DeedDraftResolver
        }
    }
];
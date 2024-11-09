import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  ViewDraftResolver } from 'app/modules/admin/transfer-application/draft/view/view.resolvers';
import { ViewDraftComponent } from 'app/modules/admin/transfer-application/draft/view/view.component';

export const  ViewDraftRoutes: Route[] = [
    {
        path     : '',
        component: ViewDraftComponent,
        resolve  : {
            data: ViewDraftResolver
        }
    }
];

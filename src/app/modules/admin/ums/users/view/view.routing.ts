import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  ViewUserResolver } from 'app/modules/admin/ums/users/view/view.resolvers';
import { ViewUserComponent } from 'app/modules/admin/ums/users/view/view.component';

export const  ViewUserRoutes: Route[] = [
    {
        path     : '',
        component: ViewUserComponent,
        resolve  : {
            data: ViewUserResolver
        }
    }
];

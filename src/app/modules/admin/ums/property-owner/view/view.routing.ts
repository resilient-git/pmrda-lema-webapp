import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  ViewPropertyResolver } from 'app/modules/admin/property-owner/view/view.resolvers';
import { ViewPropertyComponent } from 'app/modules/admin/property-owner/view/view.component';

export const  ViewPropertyRoutes: Route[] = [
    {
        path     : '',
        component: ViewPropertyComponent,
        resolve  : {
            data: ViewPropertyResolver
        }
    }
];

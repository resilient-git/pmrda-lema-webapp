import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  ViewResolver } from 'app/modules/admin/masters/type-of-structure/view/view.resolvers';
import { ViewComponent } from 'app/modules/admin/masters/type-of-structure/view/view.component';

export const  ViewRoutes: Route[] = [
    {
        path     : '',
        component: ViewComponent,
        resolve  : {
            data: ViewResolver
        }
    }
];
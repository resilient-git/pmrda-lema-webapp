import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  EditUserResolver } from 'app/modules/admin/ums/users/edit/edit.resolvers';
import { EditUserComponent } from 'app/modules/admin/ums/users/edit/edit.component';

export const  EditUserRoutes: Route[] = [
    {
        path     : '',
        component: EditUserComponent,
        resolve  : {
            data: EditUserResolver
        }
    }
];

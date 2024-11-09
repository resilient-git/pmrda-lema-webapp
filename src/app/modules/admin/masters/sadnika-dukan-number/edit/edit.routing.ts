import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  EditResolver } from 'app/modules/admin/masters/sadnika-dukan-number/edit/edit.resolvers';
import { EditComponent } from 'app/modules/admin/masters/sadnika-dukan-number/edit/edit.component';

export const  EditRoutes: Route[] = [
    {
        path     : '',
        component: EditComponent,
        resolve  : {
            data: EditResolver
        }
    }
];

import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  EditPropertyResolver } from 'app/modules/admin/properties/edit/edit.resolvers';
import { EditPropertyComponent } from 'app/modules/admin/properties/edit/edit.component';

export const  EditPropertyRoutes: Route[] = [
    {
        path     : '',
        component: EditPropertyComponent,
        resolve  : {
            data: EditPropertyResolver
        }
    }
];

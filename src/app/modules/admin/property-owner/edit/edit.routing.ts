import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/ums/users/add-new/add-new.component';
import {  EditPropertyOwnerResolver } from 'app/modules/admin/property-owner/edit/edit.resolvers';
import { EditPropertyOwnerComponent } from 'app/modules/admin/property-owner/edit/edit.component';

export const  EditPropertyOwnerRoutes: Route[] = [
    {
        path     : '',
        component: EditPropertyOwnerComponent,
        resolve  : {
            data: EditPropertyOwnerResolver
        }
    }
];

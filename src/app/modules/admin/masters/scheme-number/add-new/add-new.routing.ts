import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/masters/scheme-number/add-new/add-new.component';
import { AddNewResolver } from 'app/modules/admin/masters/scheme-number/add-new/add-new.resolvers';

export const  AddNewRoutes: Route[] = [
    {
        path     : '',
        component: AddNewComponent,
        resolve  : {
            data: AddNewResolver
        }
    }
];
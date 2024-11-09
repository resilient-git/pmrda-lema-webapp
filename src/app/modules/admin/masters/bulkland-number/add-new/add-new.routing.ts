import { Route } from '@angular/router';
import { AddNewComponent } from 'app/modules/admin/masters/bulkland-number/add-new/add-new.component';
import { AddNewResolver } from 'app/modules/admin/masters/bulkland-number/add-new/add-new.resolvers';

export const  AddNewRoutes: Route[] = [
    {
        path     : '',
        component: AddNewComponent,
        resolve  : {
            data: AddNewResolver
        }
    }
];

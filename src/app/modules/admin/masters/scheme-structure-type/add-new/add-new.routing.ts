import { Route } from '@angular/router';
import { AddNewComponent } from './add-new.component';
import { AddNewResolver } from './add-new.resolvers';

export const  AddNewRoutes: Route[] = [
    {
        path     : '',
        component: AddNewComponent,
        resolve  : {
            data: AddNewResolver
        }
    }
];

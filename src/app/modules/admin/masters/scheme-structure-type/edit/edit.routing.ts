import { Route } from '@angular/router';
import {  EditResolver } from './edit.resolvers';
import { EditComponent } from './edit.component';

export const  EditRoutes: Route[] = [
    {
        path     : '',
        component: EditComponent,
        resolve  : {
            data: EditResolver
        }
    }
];

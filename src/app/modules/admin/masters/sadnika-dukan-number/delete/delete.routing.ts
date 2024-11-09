import { Route } from '@angular/router';
import { DeleteComponent } from 'app/modules/admin/masters/sadnika-dukan-number/delete/delete.component';
import { DeleteResolver } from 'app/modules/admin/masters/sadnika-dukan-number/delete/delete.resolvers';

export const  DeleteRoutes: Route[] = [
    {
        path     : '',
        component: DeleteComponent,
        resolve  : {
            data: DeleteResolver
        }
    }
];

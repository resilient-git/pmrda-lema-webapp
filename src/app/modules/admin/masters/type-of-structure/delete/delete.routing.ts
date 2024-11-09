import { Route } from '@angular/router';
import { DeleteComponent } from 'app/modules/admin/masters/type-of-structure/delete/delete.component';
import { DeleteResolver } from 'app/modules/admin/masters/type-of-structure/delete/delete.resolvers';

export const  DeleteRoutes: Route[] = [
    {
        path     : '',
        component: DeleteComponent,
        resolve  : {
            data: DeleteResolver
        }
    }
];

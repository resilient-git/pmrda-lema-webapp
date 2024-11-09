import { Route } from '@angular/router';
import { DeleteComponent } from 'app/modules/admin/masters/society-name/delete/delete.component';
import { DeleteResolver } from 'app/modules/admin/masters/society-name/delete/delete.resolvers';

export const  DeleteRoutes: Route[] = [
    {
        path     : '',
        component: DeleteComponent,
        resolve  : {
            data: DeleteResolver
        }
    }
];

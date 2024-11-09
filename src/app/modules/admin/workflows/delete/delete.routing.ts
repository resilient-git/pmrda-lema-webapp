import { Route } from '@angular/router';
import { DeleteComponent } from 'app/modules/admin/workflows/delete/delete.component';
import { DeleteResolver } from 'app/modules/admin/workflows/delete/delete.resolvers';

export const  DeleteRoutes: Route[] = [
    {
        path     : '',
        component: DeleteComponent,
        resolve  : {
            data: DeleteResolver
        }
    }
];

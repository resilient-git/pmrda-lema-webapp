import { Route } from "@angular/router";
import { TypeOfStructureComponent } from 'app/modules/admin/masters/type-of-structure/list/list.component';
import { TypeOfStructureListResolver } from 'app/modules/admin/masters/type-of-structure/list/list.resolvers';


export const TypeOfStructureListRoutes: Route[] = [
    {
        path     : '',
        component: TypeOfStructureComponent,
        resolve  : {
            data: TypeOfStructureListResolver
        }
    }
];
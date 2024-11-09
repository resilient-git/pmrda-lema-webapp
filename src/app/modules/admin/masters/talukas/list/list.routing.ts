import { Route } from "@angular/router";
import { TalukasListComponent } from 'app/modules/admin/masters/talukas/list/list.component';
import { TalukasListResolver } from 'app/modules/admin/masters/talukas/list/list.resolvers';


export const TalukasListRoutes: Route[] = [
    {
        path     : '',
        component: TalukasListComponent,
        resolve  : {
            data: TalukasListResolver
        }
    }
];
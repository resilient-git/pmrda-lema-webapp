import { Route } from "@angular/router";
import { DownloadComponent } from 'app/modules/citizens/download/download.component';
import { DownloadResolver } from 'app/modules/citizens/download/download.resolvers';


export const DownloadRoutes: Route[] = [
    {
        path     : '',
        component: DownloadComponent,
        resolve  : {
            data: DownloadResolver
        }
    }
];
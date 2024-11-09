import { Route } from "@angular/router";
import { FileCloseComponent } from './file_close.component';
import { FileCloseResolver } from './file_close.resolvers';


export const FileCloseRoutes: Route[] = [
    {
        path     : '',
        component: FileCloseComponent,
        resolve  : {
            data: FileCloseResolver
        }
    }
];
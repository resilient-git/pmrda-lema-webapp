import { Route } from "@angular/router";
import { FileCloseComponent } from 'app/modules/desk1/property/application/heirship/file_close/file_close.component';
import { FileCloseResolver } from 'app/modules/desk1/property/application/heirship/file_close/file_close.resolvers';


export const FileCloseRoutes: Route[] = [
    {
        path     : '',
        component: FileCloseComponent,
        resolve  : {
            data: FileCloseResolver
        }
    }
];
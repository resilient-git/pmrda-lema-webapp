import { Route } from "@angular/router";
import { EmailComponent } from 'app/modules/dy-commissioner/settings/email/email.component';
import { EmailResolver } from 'app/modules/dy-commissioner/settings/email/email.resolvers';


export const EmailRoutes: Route[] = [
    {
        path     : '',
        component: EmailComponent,
        resolve  : {
            data: EmailResolver
        }
    }
];
import { Route } from "@angular/router";
import { EmailComponent } from 'app/modules/desk3/settings/email/email.component';
import { EmailResolver } from 'app/modules/desk3/settings/email/email.resolvers';


export const EmailRoutes: Route[] = [
    {
        path     : '',
        component: EmailComponent,
        resolve  : {
            data: EmailResolver
        }
    }
];
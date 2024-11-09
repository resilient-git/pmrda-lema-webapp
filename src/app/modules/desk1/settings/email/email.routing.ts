import { Route } from "@angular/router";
import { EmailComponent } from 'app/modules/desk1/settings/email/email.component';
import { EmailResolver } from 'app/modules/desk1/settings/email/email.resolvers';


export const EmailRoutes: Route[] = [
    {
        path     : '',
        component: EmailComponent,
        resolve  : {
            data: EmailResolver
        }
    }
];
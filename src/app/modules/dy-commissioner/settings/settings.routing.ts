import { Route } from "@angular/router";
import { SettingsComponent } from 'app/modules/dy-commissioner/settings/settings.component';
import { SettingsResolver } from 'app/modules/dy-commissioner/settings/settings.resolvers';


export const SettingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent,
        resolve  : {
            data: SettingsResolver
        }
    }
];
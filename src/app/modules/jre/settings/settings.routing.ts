import { Route } from "@angular/router";
import { SettingsComponent } from 'app/modules/jre/settings/settings.component';
import { SettingsResolver } from 'app/modules/jre/settings/settings.resolvers';


export const SettingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent,
        resolve  : {
            data: SettingsResolver
        }
    }
];
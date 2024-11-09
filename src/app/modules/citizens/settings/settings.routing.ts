import { Route } from "@angular/router";
import { SettingsComponent } from 'app/modules/citizens/settings/settings.component';
import { SettingsResolver } from 'app/modules/citizens/settings/settings.resolvers';


export const SettingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent,
        resolve  : {
            data: SettingsResolver
        }
    }
];
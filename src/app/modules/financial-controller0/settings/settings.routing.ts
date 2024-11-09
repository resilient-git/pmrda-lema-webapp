import { Route } from "@angular/router";
import { SettingsComponent } from 'app/modules/financial-controller/settings/settings.component';
import { SettingsResolver } from 'app/modules/financial-controller/settings/settings.resolvers';


export const SettingsRoutes: Route[] = [
    {
        path     : '',
        component: SettingsComponent,
        resolve  : {
            data: SettingsResolver
        }
    }
];
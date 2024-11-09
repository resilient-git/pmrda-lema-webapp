import { Route } from "@angular/router";
import { AppointmentComponent } from 'app/modules/desk4/property/application/banknoc/transfer/appointment/appointment.component';
import { AppointmentResolver } from 'app/modules/desk4/property/application/banknoc/transfer/appointment/appointment.resolvers';


export const AppointmentRoutes: Route[] = [
    {
        path     : '',
        component: AppointmentComponent,
        resolve  : {
            data: AppointmentResolver
        }
    }
];
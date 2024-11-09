import { Route } from "@angular/router";
import { AppointmentComponent } from 'app/modules/tahsildar/property/application/transfer/appointment/appointment.component';
import { AppointmentResolver } from 'app/modules/tahsildar/property/application/transfer/appointment/appointment.resolvers';


export const AppointmentRoutes: Route[] = [
    {
        path     : '',
        component: AppointmentComponent,
        resolve  : {
            data: AppointmentResolver
        }
    }
];
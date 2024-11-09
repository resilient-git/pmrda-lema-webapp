import { Route } from "@angular/router";
import { AppointmentsComponent } from 'app/modules/citizens/property/application/transfer/appointments/appointments.component';
import { AppointmentsResolver } from 'app/modules/citizens/property/application/transfer/appointments/appointments.resolvers';


export const AppointmentsRoutes: Route[] = [
    {
        path     : '',
        component: AppointmentsComponent,
        resolve  : {
            data: AppointmentsResolver
        }
    }
];
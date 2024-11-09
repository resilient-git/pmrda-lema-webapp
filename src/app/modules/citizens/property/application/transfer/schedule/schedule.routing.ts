import { Route } from '@angular/router';
import { SchedulePropertyTransferComponent } from 'app/modules/citizens/property/application/transfer/schedule/schedule.component';
import { SchedulePropertyTransferResolver } from 'app/modules/citizens/property/application/transfer/schedule/schedule.resolvers';

export const SchedulePropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: SchedulePropertyTransferComponent,
        resolve  : {
            data: SchedulePropertyTransferResolver
        }
    }
];

import { Route } from '@angular/router';
import { ScheduleHeirshipTransferComponent } from 'app/modules/citizens/property/application/heirship/schedule/schedule.component';
import { ScheduleHeirshipTransferResolver } from 'app/modules/citizens/property/application/heirship/schedule/schedule.resolvers';

export const ScheduleHeirshipTransferRoutes: Route[] = [
    {
        path     : '',
        component: ScheduleHeirshipTransferComponent,
        resolve  : {
            data: ScheduleHeirshipTransferResolver
        }
    }
];

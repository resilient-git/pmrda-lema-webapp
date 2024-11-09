import { Route } from '@angular/router';
import { BookingDoneHeirshipTransferComponent } from 'app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.component';
import { BookingDoneHeirshipTransferResolver } from 'app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.resolvers';

export const BookingDoneHeirshipTransferRoutes: Route[] = [
    {
        path     : '',
        component: BookingDoneHeirshipTransferComponent,
        resolve  : {
            data: BookingDoneHeirshipTransferResolver
        }
    }
];

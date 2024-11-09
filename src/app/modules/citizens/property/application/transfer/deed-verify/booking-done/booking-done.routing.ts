import { Route } from '@angular/router';
import { BookingDonePropertyTransferComponent } from 'app/modules/citizens/property/application/transfer/deed-verify/booking-done/booking-done.component';
import { BookingDonePropertyTransferResolver } from 'app/modules/citizens/property/application/transfer/deed-verify/booking-done/booking-done.resolvers';

export const BookingDonePropertyTransferRoutes: Route[] = [
    {
        path     : '',
        component: BookingDonePropertyTransferComponent,
        resolve  : {
            data: BookingDonePropertyTransferResolver
        }
    }
];

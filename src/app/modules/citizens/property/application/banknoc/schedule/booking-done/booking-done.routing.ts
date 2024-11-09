import { Route } from '@angular/router';
import { BookingDoneBankNocTransferComponent } from './booking-done.component';
import { BookingDoneBankNocTransferResolver } from './booking-done.resolvers';

export const BookingDoneBankNocTransferRoutes: Route[] = [
    {
        path     : '',
        component: BookingDoneBankNocTransferComponent,
        resolve  : {
            data: BookingDoneBankNocTransferResolver
        }
    }
];

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { BookingDoneBankNocTransferService } from './booking-done.service';

@Injectable({
    providedIn: 'root'
})
export class BookingDoneBankNocTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _BookingDoneBankNocTransferService: BookingDoneBankNocTransferService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>
    {
        return this._BookingDoneBankNocTransferService.getData();
    }
}

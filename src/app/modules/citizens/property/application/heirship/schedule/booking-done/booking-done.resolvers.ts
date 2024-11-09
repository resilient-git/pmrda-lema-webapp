import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
//import { ListHeirshipTransferService } from 'app/modules/citizens/property/application/heirship/list/list.service';
import { BookingDoneHeirshipTransferService } from 'app/modules/citizens/property/application/heirship/schedule/booking-done/booking-done.service';

@Injectable({
    providedIn: 'root'
})
export class BookingDoneHeirshipTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _BookingDoneHeirshipTransferService: BookingDoneHeirshipTransferService)
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
        return this._BookingDoneHeirshipTransferService.getData();
    }
}

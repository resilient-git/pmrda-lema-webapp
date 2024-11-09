import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyTransferService } from 'app/modules/citizens/property/application/transfer/list-old/list.service';
import { BookingDonePropertyTransferService } from 'app/modules/citizens/property/application/transfer/schedule/booking-done/booking-done.service';

@Injectable({
    providedIn: 'root'
})
export class BookingDonePropertyTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _BookingDonePropertyTransferService: BookingDonePropertyTransferService)
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
        return this._BookingDonePropertyTransferService.getData();
    }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ScheduleHeirshipTransferService } from 'app/modules/citizens/property/application/heirship/schedule/schedule.service';

@Injectable({
    providedIn: 'root'
})
export class ScheduleHeirshipTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _ScheduleHeirshipTransferService: ScheduleHeirshipTransferService)
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
        return this._ScheduleHeirshipTransferService.getData();
    }
}

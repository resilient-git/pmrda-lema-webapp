import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ListPropertyTransferService } from 'app/modules/citizens/property/application/transfer/list-old/list.service';
import { SchedulePropertyTransferService } from 'app/modules/citizens/property/application/transfer/schedule/schedule.service';

@Injectable({
    providedIn: 'root'
})
export class SchedulePropertyTransferResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _SchedulePropertyTransferService: SchedulePropertyTransferService)
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
        return this._SchedulePropertyTransferService.getData();
    }
}

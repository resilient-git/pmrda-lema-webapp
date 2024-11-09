import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentsService } from 'app/modules/citizens/property/application/transfer/appointments/appointments.service';

@Injectable({
    providedIn: 'root'
})
export class AppointmentsResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _appointmentsService: AppointmentsService)
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
        return this._appointmentsService.getData();
    }
}

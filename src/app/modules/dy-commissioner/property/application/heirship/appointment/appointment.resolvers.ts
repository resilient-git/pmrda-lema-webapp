import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentService } from 'app/modules/dy-commissioner/property/application/heirship/appointment/appointment.service';

@Injectable({
    providedIn: 'root'
})
export class AppointmentResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _appointmentService: AppointmentService)
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
        return this._appointmentService.getData();
    }
}

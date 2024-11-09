import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LandingService } from 'app/modules/desk1/property/application/transfer/deed_printinglanding/landing.service';

@Injectable({
    providedIn: 'root'
})
export class LandingResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _landingService: LandingService)
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
        return this._landingService.getData();
    }
}

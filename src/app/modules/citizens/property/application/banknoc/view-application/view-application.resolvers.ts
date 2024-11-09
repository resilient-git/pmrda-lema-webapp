import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewApplicationService } from './view-application.service';

@Injectable({
    providedIn: 'root'
})
export class ViewApplicationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _verifyMobileService: ViewApplicationService)
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
        return this._verifyMobileService.getData();
    }
}

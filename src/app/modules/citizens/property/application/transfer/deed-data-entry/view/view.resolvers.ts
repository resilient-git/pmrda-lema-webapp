import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewService } from './view.service';

@Injectable({
    providedIn: 'root'
})
export class ViewResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _verifyMobileService: ViewService)
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

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VerifyMobileService } from 'app/modules/citizens/property/application/transfer/verify-mobile/verify-mobile.service';

@Injectable({
    providedIn: 'root'
})
export class VerifyMobileResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _verifyMobileService: VerifyMobileService)
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

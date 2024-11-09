import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VerificationCloseService } from 'app/modules/desk1/property/application/heirship/verification_close/verification_close.service';

@Injectable({
    providedIn: 'root'
})
export class VerificationCloseResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _verification_closeService: VerificationCloseService)
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
        return this._verification_closeService.getData();
    }
}

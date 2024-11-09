import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DeedVerificationService } from 'app/modules/joint-commissioner/property/application/transfer/deed_verification/deed_verification.service';

@Injectable({
    providedIn: 'root'
})
export class DeedVerificationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _deed_verificationService: DeedVerificationService)
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
        return this._deed_verificationService.getData();
    }
}

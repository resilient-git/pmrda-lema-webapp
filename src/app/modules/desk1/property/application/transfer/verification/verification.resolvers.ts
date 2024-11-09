import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VerificationService } from 'app/modules/desk1/property/application/transfer/verification/verification.service';

@Injectable({
    providedIn: 'root'
})
export class VerificationResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _verificationService: VerificationService)
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
        return this._verificationService.getData();
    }
}

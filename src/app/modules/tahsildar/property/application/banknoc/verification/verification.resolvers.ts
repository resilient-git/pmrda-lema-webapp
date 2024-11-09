import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { VerificationBankNocService } from 'app/modules/tahsildar/property/application/banknoc/verification/verification.service';

@Injectable({
    providedIn: 'root'
})
export class VerificationBankNocResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _verificationBankNocService: VerificationBankNocService)
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
        return this._verificationBankNocService.getData();
    }
}

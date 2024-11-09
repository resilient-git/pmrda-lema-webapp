import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GetOtpService } from 'app/modules/citizens/property/get-otp/get-otp.service';

@Injectable({
    providedIn: 'root'
})
export class GetOtpResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _getOtpService: GetOtpService)
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
        return this._getOtpService.getData();
    }
}

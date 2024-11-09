import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MobileService } from 'app/modules/financial-controller/settings/mobile/mobile.service';

@Injectable({
    providedIn: 'root'
})
export class MobileResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _mobileService: MobileService)
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
        return this._mobileService.getData();
    }
}

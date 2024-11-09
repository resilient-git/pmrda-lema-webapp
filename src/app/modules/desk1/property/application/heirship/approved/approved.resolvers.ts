import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RejectedService } from 'app/modules/desk1/property/application/transfer/rejected/rejected.service';
import { ApprovedHeirshipService } from './approved.service';

@Injectable({
    providedIn: 'root'
})
export class ApprovedResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _approvedHeirshipService: ApprovedHeirshipService)
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
        return this._approvedHeirshipService.getData();
    }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PendingHeirshipService } from 'app/modules/desk1/property/application/heirship/pending/pending.service';

@Injectable({
    providedIn: 'root'
})
export class PendingResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _pendingHeirshipService: PendingHeirshipService)
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
        return this._pendingHeirshipService.getData();
    }
}

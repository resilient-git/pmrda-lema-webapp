import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PendingService } from 'app/modules/financial-controller/property/application/transfer/pending/pending.service';

@Injectable({
    providedIn: 'root'
})
export class PendingResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _pendingService: PendingService)
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
        return this._pendingService.getData();
    }
}

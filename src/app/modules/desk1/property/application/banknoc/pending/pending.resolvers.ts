import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PendingBankNocService } from 'app/modules/desk1/property/application/banknoc/pending/pending.service';

@Injectable({
    providedIn: 'root'
})
export class PendingResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _pendingBankNocService: PendingBankNocService)
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
        return this._pendingBankNocService.getData();
    }
}

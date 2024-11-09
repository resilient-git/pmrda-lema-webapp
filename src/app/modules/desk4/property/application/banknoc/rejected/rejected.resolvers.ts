import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RejectedService } from 'app/modules/desk4/property/application/banknoc/transfer/rejected/rejected.service';

@Injectable({
    providedIn: 'root'
})
export class RejectedResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _rejectedService: RejectedService)
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
        return this._rejectedService.getData();
    }
}

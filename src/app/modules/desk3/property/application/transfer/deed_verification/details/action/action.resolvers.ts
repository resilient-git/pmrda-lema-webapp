import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewPropertyTransferActionService } from 'app/modules/desk3/property/application/transfer/deed_verification/details/action/action.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyTransferActionResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewPropertyTransferActionService: ViewPropertyTransferActionService)
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
        return this._viewPropertyTransferActionService.getData();
    }
}

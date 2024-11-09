import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ViewHeirshipTransferActionService } from 'app/modules/desk1/property/application/heirship/pending/details/action/action.service';

@Injectable({
    providedIn: 'root'
})
export class ViewHeirshipTransferActionResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewHeirshipTransferActionService: ViewHeirshipTransferActionService)
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
        return this._viewHeirshipTransferActionService.getData();
    }
}

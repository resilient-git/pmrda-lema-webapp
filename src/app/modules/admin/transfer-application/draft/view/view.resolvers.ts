import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewDraftService } from'app/modules/admin/transfer-application/draft/view/view.service';

@Injectable({
    providedIn: 'root'
})
export class ViewDraftResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewuserService: ViewDraftService)
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
        return this._viewuserService.getData();
    }
}

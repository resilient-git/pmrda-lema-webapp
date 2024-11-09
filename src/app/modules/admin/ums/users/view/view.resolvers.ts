import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewUserService } from'app/modules/admin/ums/users/view/view.service';

@Injectable({
    providedIn: 'root'
})
export class ViewUserResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewuserService: ViewUserService)
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

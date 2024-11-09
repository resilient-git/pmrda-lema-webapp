import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewService } from'app/modules/admin/masters/sadnika-dukan-number/view/view.service';

@Injectable({
    providedIn: 'root'
})
export class ViewResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewService: ViewService)
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
        return this._viewService.getData();
    }
}

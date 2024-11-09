import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { ViewPropertyService } from'app/modules/admin/properties/view/view.service';

@Injectable({
    providedIn: 'root'
})
export class ViewPropertyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _viewpropertyService: ViewPropertyService)
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
        return this._viewpropertyService.getData();
    }
}

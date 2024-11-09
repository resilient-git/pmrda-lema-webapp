import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleListService } from 'app/modules/admin/ums/roles/list/list.service';

@Injectable({
    providedIn: 'root'
})
export class RoleListResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _rolelistService: RoleListService)
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
        return this._rolelistService.getData();
    }
}

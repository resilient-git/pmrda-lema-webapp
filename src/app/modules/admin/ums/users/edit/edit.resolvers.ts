import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EditUserService } from'app/modules/admin/ums/users/edit/edit.service';

@Injectable({
    providedIn: 'root'
})
export class EditUserResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _edituserService: EditUserService)
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
        return this._edituserService.getData();
    }
}

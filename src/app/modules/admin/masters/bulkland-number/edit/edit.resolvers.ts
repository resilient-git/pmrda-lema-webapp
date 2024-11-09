import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EditService } from'app/modules/admin/masters/bulkland-number/edit/edit.service';


@Injectable({
    providedIn: 'root'
})
export class EditResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _editService: EditService)
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
        return this._editService.getData();
    }
}

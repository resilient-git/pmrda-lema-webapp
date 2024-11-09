import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EditPropertyOwnerService } from'app/modules/admin/property-owner/edit/edit.service';


@Injectable({
    providedIn: 'root'
})
export class EditPropertyOwnerResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _editpropertyOwnerService: EditPropertyOwnerService)
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
        return this._editpropertyOwnerService.getData();
    }
}

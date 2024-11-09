import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { EditPropertyService } from'app/modules/admin/properties/edit/edit.service';


@Injectable({
    providedIn: 'root'
})
export class EditPropertyResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _editpropertyService: EditPropertyService)
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
        return this._editpropertyService.getData();
    }
}
